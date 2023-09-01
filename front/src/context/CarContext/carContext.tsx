import { createContext, useState, useEffect } from "react";
import { AdsCar, Car, CarContextType, CarProviderProps } from "./@types";
import { api } from "../../services/api";

export const CarContext = createContext({} as CarContextType);

export const CarProvider = ({ children }: CarProviderProps) => {
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    color: "",
    year: 0,
    fuel: 0,
    km: 0,
    price: 0,
  });

  const [salesCar, setSalesCar] = useState<AdsCar[]>([]);
  const [saleCar, setSaleCar] = useState<AdsCar>();

  useEffect(() => {
    const cars = [
      {
        id: 1,
        brand: "Porsche",
        model: "Porsche 718",
        color: "Azul",
        year: 2021,
        fuel: 1,
        km: 0,
        price: 30000,
        owner: "Teste dois",
      },
      {
        id: 2,
        brand: "Ford",
        model: "Ka",
        color: "Azul",
        year: 2021,
        fuel: 1,
        km: 0,
        price: 30000,
        owner: "Oi Tres",
      },
      {
        id: 3,
        brand: "Fiat",
        model: "Mobi",
        color: "Azul",
        year: 2021,
        fuel: 1,
        km: 0,
        price: 30000,
        owner: "Teste",
      },
      {
        id: 4,
        brand: "Fiat",
        model: "Fit",
        color: "Azul",
        year: 2021,
        fuel: 1,
        km: 0,
        price: 30000,
        owner: "Testezão",
      },
    ];

    const filtered = cars.filter((car) => {
      return (
        (filters.brand === "" ||
          car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
        (filters.model === "" ||
          car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
        (filters.color === "" ||
          car.color.toLowerCase().includes(filters.color.toLowerCase())) &&
        (filters.year === 0 || car.year === +filters.year) &&
        (filters.fuel === 0 || car.fuel === +filters.fuel) &&
        (filters.km === 0 || car.km >= +filters.km) &&
        (filters.price === 0 || car.price >= +filters.price)
      );
    });

    setFilteredCars(filtered);
  }, [filters]);

  const handleFilterChange = (filterName: string, value: string | number) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
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
        salesCar,
        getCars,
        getCar,
        saleCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
