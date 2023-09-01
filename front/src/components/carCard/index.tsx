import { colors } from "@mui/material";
import { AdsCar } from "../../context/CarContext/@types";
import { CardStyled, DetailsBox, InfoStyled, NameBoxStyled } from "./style";
import { Link } from "react-router-dom";

// interface ICarMock {
//   id: string;
//   img: string;
//   model: string;
//   brand: string;
//   description: string;
//   owner: string;
//   km: number;
//   year: number;
//   price: number;
// }

export const CarCard = ({ car }: { car: AdsCar }) => {
  // const getInitials = (name: string) => {
  //   const words = name.split(" ");
  //   const initials = words.map((word) => word.charAt(0).toUpperCase());
  //   return initials.join("");
  // };

  const colors = [
    "var(--color-random-1)",
    "var(--color-random-2)",
    "var(--color-random-3)",
    "var(--color-random-4)",
    "var(--color-random-5)",
    "var(--color-random-6)",
    "var(--color-random-7)",
    "var(--color-random-8)",
    "var(--color-random-9)",
    "var(--color-random-10)",
    "var(--color-random-11)",
    "var(--color-random-12)",
  ];

  return (
    <Link
      to={"/products"}
      onClick={() => {
        localStorage.setItem("@CarID", car.id);
      }}
    >
      <CardStyled>
        <figure>
          <img src={car.img_url} alt={car.car_id} />
        </figure>
        <InfoStyled>
          <h6>
            {car.title} - {car.car_id}
          </h6>
          <p>{car.description}</p>
        </InfoStyled>
        <NameBoxStyled $colors={colors}>
          <div>PE</div>
          <p>{car.user_id}</p>
        </NameBoxStyled>
        <DetailsBox>
          <div>
            <p>{car.kilometers} KM</p>
            <p>{car.year}</p>
          </div>
          <span>
            {car.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </DetailsBox>
      </CardStyled>
    </Link>
  );
};
