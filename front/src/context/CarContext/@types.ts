import { ReactNode } from "react";

export interface ICar {
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
  filteredCars: ICar[];
  handleFilterChange: (filterName: string, value: string | number) => void;
  carDelete: (id: number) => void;
  salesCar: AdsCar[];
  getCars: () => Promise<void>;
  getCar: (id: string) => Promise<void>;
  saleCar: AdsCar | undefined;
}

export interface CarProviderProps {
  children: ReactNode;
}

export interface AdsCar {
  user_id: string;
  car_id: string;
  title: string;
  img_url: string;
  color: string;
  price: number;
  description: string;
  year: number;
  fuel: string;
  kilometers: number;
  gallery: [];
  status: string;
  id: string;
  createdAt: Date;
}
