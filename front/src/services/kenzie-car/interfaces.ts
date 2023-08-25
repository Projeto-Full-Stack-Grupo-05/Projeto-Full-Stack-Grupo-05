interface IModel {
  name: string;
}
export interface IKenzieCar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface IKenzieCarBrands {
  chevrolet: IModel[];
  citroën: IModel[];
  fiat: IModel[];
  ford: IModel[];
  honda: IModel[];
  hyundai: IModel[];
  nissan: IModel[];
  peugeot: IModel[];
  renault: IModel[];
  toyota: IModel[];
  volkswagen: IModel[];
}
