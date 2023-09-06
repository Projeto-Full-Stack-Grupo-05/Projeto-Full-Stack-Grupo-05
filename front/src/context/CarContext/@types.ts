import { ReactNode } from "react";

export interface ICar {
  id: string;
  brand: string;
  title: string;
  model: string;
  color: string;
  year: number;
  fuel: number;
  kilometers: number;
  price: number;
  owner?: string;
  description: string;
  img: string;
  user: {
    id: string;
    name: string;
    email: string;
    birthdate: string;
    cellphone: string;
    cpf: string;
    description: string;
    createdAt: string;
    profile: string;
  };
}

export interface CarContextType {
  filteredCars: iCarsToRender[];
  handleFilterChange: (filterName: string, value: string | number) => void;
  carDelete: (id: number) => void;
  salesCar: AdsCar[];
  getCars: () => Promise<void>;
  getCar: (id: string) => Promise<void>;
  saleCar: AdsCar | undefined;
  carsToRender: iCarsToRender[];
  clearFilters: () => void;
  card: ICar[];
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

export interface iCarsToRender {
  id: string;
  sale: {
    user_id: string;
    buyer_id: string;
    title: string;
    img_url: string;
    color: string;
    price: number;
    description: string;
    year: number;
    fuel: number;
    kilometers: number;
    brand: string;
    gallery: [];
    status: string;
    id: string;
    createdAt: string;
  };
  user: {
    id: string;
    name: string;
    email: string;
    birthdate: string;
    cellphone: string;
    cpf: string;
    description: string;
    createdAt: string;
    profile: string;
  };
}
