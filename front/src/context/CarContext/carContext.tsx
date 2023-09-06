import { createContext, useState, useEffect } from "react";
import {
  AdsCar,
  CarContextType,
  CarProviderProps,
  ICar,
  iCarsToRender,
} from "./@types";
import { api } from "../../services/api";

export const CarContext = createContext({} as CarContextType);

export const CarProvider = ({ children }: CarProviderProps) => {
  /*const [loading, setLoading] = useState(true);
  const [, setDataUpdated] = useState(false);*/
  const [card, setCard] = useState<ICar[]>([]);

  const [carsToRender, setCarsToRender] = useState<iCarsToRender[]>([]);
  const [filteredCars, setFilteredCars] = useState<iCarsToRender[]>([]);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    color: "",
    year: 0,
    fuel: 0,
    kmStart: 0,
    kmEnd: 0,
    priceStart: 0,
    priceEnd: 0,
  });

  const initialFilters = {
    brand: "",
    model: "",
    color: "",
    year: 0,
    fuel: 0,
    kmStart: 0,
    kmEnd: 0,
    priceStart: 0,
    priceEnd: 0,
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const [salesCar, setSalesCar] = useState<AdsCar[]>([]);
  const [saleCar, setSaleCar] = useState<AdsCar>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await api.get("/sales");
        setCarsToRender(cars.data.data);

        const filtered = cars.data.data.filter(
          (car: {
            sale: {
              brand: string;
              title: string;
              color: string;
              year: number;
              fuel: number;
              kilometers: number;
              price: number;
            };
          }) => {
            const { brand, title, color, year, fuel, kilometers, price } =
              car.sale;

            const kmStart = filters.kmStart || 0;
            const kmEnd = filters.kmEnd || 0;
            const priceStart = filters.priceStart || 0;
            const priceEnd = filters.priceEnd || 0;

            return (
              (filters.brand === "" ||
                brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
              (filters.model === "" ||
                title.toLowerCase().includes(filters.model.toLowerCase())) &&
              (filters.color === "" ||
                color.toLowerCase().includes(filters.color.toLowerCase())) &&
              (filters.year === 0 || year === +filters.year) &&
              (filters.fuel === 0 || fuel === +filters.fuel) &&
              ((kmStart === 0 && kmEnd === 0) ||
                (kilometers >= kmStart && kilometers <= kmEnd)) &&
              ((priceStart === 0 && priceEnd === 0) ||
                (price >= priceStart && price <= priceEnd))
            );
          }
        );

        setFilteredCars(filtered);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [filters]);

  const handleFilterChange = (
    filterName: string,
    value: string | number | object
  ) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const id = localStorage.getItem("@USERID") || "";
        const response = await api.get(`/user/${id}/sales`);
        setCard(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCard();
  }, []);

  const carDelete = async (carId: number) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/sales/${carId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCars = async () => {
    try {
      const res = await api.get("/sales");
      setSalesCar(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCar = async (id: string) => {
    try {
      const res = await api.get(`/sales/${id}`);
      setSaleCar(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CarContext.Provider
      value={{
        filteredCars,
        handleFilterChange,
        carDelete,
        salesCar,
        getCars,
        getCar,
        saleCar,
        carsToRender,
        clearFilters,
        card,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
