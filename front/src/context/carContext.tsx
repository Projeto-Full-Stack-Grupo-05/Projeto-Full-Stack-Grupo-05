import { createContext, useState, useEffect, ReactNode } from 'react';

interface Car {
    id: number
    brand: string
    model: string
    color: string
    year: number
    fuel: number
    km: number
    price: number
    owner?: string
}

interface CarContextType {
    filteredCars: Car[];
    handleFilterChange: (filterName: string, value: string | number) => void;
}

interface CarProviderProps {
    children: ReactNode;
}

export const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider = ({ children }: CarProviderProps) => {
    
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    color: '',
    year: 0,
    fuel: 0,
    km: 0,
    price: 0
  });

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
            owner: "Teste dois"
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
            owner: "Oi Tres"
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
          owner: "Teste"
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
        owner: "Testezão"
    }
    ]

    const filtered = cars.filter(car => {
        return (
          (filters.brand === '' || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
          (filters.model === '' || car.model.toLowerCase().includes(filters.model.toLowerCase())) &&
          (filters.color === '' || car.color.toLowerCase().includes(filters.color.toLowerCase())) &&
          (filters.year === 0 || car.year === +filters.year) &&
          (filters.fuel === 0 || car.fuel === +filters.fuel) &&
          (filters.km === 0 || (car.km >= +filters.km)) &&
          (filters.price === 0 || (car.price >= +filters.price))
        );
      });

        setFilteredCars(filtered);
  }, [filters]);

  const handleFilterChange = (filterName: string, value: string | number) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  return (
    <CarContext.Provider value={{ filteredCars, handleFilterChange }}>
      {children}
    </CarContext.Provider>
  );
};