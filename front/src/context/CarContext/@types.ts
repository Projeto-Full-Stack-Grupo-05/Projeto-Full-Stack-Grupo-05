import { ReactNode } from "react";

export interface Car {
  id: number;
  brand: string;
  model: string;
  color: string;
  year: number;
  fuel: number;
  km: number;
  price: number;
  owner?: string;
}

export interface CarContextType {
  filteredCars: Car[];
  handleFilterChange: (filterName: string, value: string | number) => void;
}

export interface CarProviderProps {
  children: ReactNode;
}
