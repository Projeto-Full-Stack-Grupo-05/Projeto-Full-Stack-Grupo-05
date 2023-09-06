import { iCarsToRender } from "../../context/CarContext/@types";
import { CardStyled, DetailsBox, InfoStyled, NameBoxStyled } from "./style";
import { Link } from "react-router-dom";

export const CarCard = ({ car }: { car: iCarsToRender }) => {
  const getInitials = (name: string) => {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join("");
  };

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
        localStorage.setItem("@CarID", car.sale.id);
      }}
    >
      <CardStyled>
        <figure>
          <img src={car.sale.img_url} alt={car.sale.title} />
        </figure>
        <InfoStyled>
          <h6>
            {car.sale.brand} - {car.sale.title}
          </h6>
          <p>{car.sale.description}</p>
        </InfoStyled>
        <NameBoxStyled $colors={colors}>
          <div>{getInitials(car.user.name)}</div>
          <p>{car.user.name}</p>
        </NameBoxStyled>
        <DetailsBox>
          <div>
            <p>{car.sale.kilometers} KM</p>
            <p>{car.sale.year}</p>
          </div>
          <span>
            {car.sale.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </DetailsBox>
      </CardStyled>
    </Link>
  );
};
