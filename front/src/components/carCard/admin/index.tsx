import { Card } from "./style";

interface ICarMock {
  id: number;
  img: string;
  model: string;
  brand: string;
  description: string;
  owner: string;
  km: number;
  year: number;
  price: number;
}

export default function CarCardAdmin({ car }: { car: ICarMock }) {
  return (
    <Card>
      <figure>
        <img src={car.img} alt={car.model} />
        <span>Ativo</span>
      </figure>

      <h6>
        {car.brand} - {car.model}
      </h6>
      <p>{car.description}</p>

      <div>
        <span>{car.km} km</span>
        <span>{car.year}</span>

        <span>
          {car.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <div>
        <button>Editar</button>
        <button>Ver detalhes</button>
      </div>
    </Card>
  );
}
