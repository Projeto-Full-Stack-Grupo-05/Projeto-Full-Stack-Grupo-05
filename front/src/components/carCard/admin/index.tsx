import { Link } from "react-router-dom";
import { ModalEditAnnounce } from "../../ModalEditAnnounce";
import { Card } from "./style";
import { ICar } from "../../../context/CarContext/@types";

/*interface ICarMock {
  id: number;
  img: string;
  model: string;
  brand: string;
  description: string;
  owner: string;
  km: number;
  year: number;
  price: number;
}*/

export default function CarCardAdmin({ car }: { car: ICar }) {
  return (
    <Card>
      <figure>
        <img src={car.img} alt={car.brand} />
        <span>Ativo</span>
      </figure>

      <h6>
        {car.brand} - {car.title}
      </h6>
      <p>{car.description}</p>

      <div>
        <span>{car.kilometers} km</span>
        <span>{car.year}</span>

        <span>
          {car.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <div>
        <ModalEditAnnounce />
        <Link to="/products">
          <button>Ver detalhes</button>
        </Link>
      </div>
    </Card>
  );
}
