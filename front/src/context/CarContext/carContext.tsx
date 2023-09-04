import { createContext, useState, useEffect } from "react";
import { AdsCar, CarContextType, CarProviderProps, iCarsToRender } from "./@types";
import { api } from "../../services/api";

export const CarContext = createContext({} as CarContextType);

export const CarProvider = ({ children }: CarProviderProps) => {
  // const [loading, setLoading] = useState(true);
  // const [, setDataUpdated] = useState(false);
  // const [card, setCard] = useState<ICar[]>([]);

  const [carsToRender, setCarsToRender] = useState<iCarsToRender[]>([]);
  const [filteredCars, setFilteredCars] = useState<iCarsToRender[]>([]);
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
    const fetchData = async () => {
      try {
        const cars = await api.get('/sales')
        setCarsToRender(cars.data.data)
  
        const filtered = cars.data.data.filter((car: { sale: { brand: string; title: string; color: string; year: number; fuel: number; kilometers: number; price: number; }; }) => {
          return (
            (filters.brand === "" ||
              car.sale.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
            (filters.model === "" ||
              car.sale.title.toLowerCase().includes(filters.model.toLowerCase())) &&
            (filters.color === "" ||
              car.sale.color.toLowerCase().includes(filters.color.toLowerCase())) &&
            (filters.year === 0 || car.sale.year === +filters.year) &&
            (filters.fuel === 0 || car.sale.fuel === +filters.fuel) &&
            (filters.km === 0 || car.sale.kilometers >= +filters.km) &&
            (filters.price === 0 || car.sale.price >= +filters.price)
          );
        });
  
        setFilteredCars(filtered)
      } catch (error) {
        console.log(error)
      }
    };
  
    fetchData()
  }, [filters]);
  

  const handleFilterChange = (filterName: string, value: string | number) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  // useEffect(() => {
  //   //const token = localStorage.getItem("@TOKEN");
  //   //if (token) {
  //     const profileForm = async () => {
  //       try {
  //         const response = await api.get("/sales", {
  //           /*headers: {
  //             Authorization: `Bearer ${token}`,
  //           },*/
  //         });
  //         setCard(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     profileForm();
  //  // }
  // }, []);

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
        carsToRender
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
