import { CardStyled, DetailsBox, InfoStyled, NameBoxStyled } from "./style";

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

export const CarCard = ({ car }: { car: ICarMock }) => {
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
    <CardStyled>
      <figure>
        <img src={car.img} alt={car.model} />
      </figure>
      <InfoStyled>
        <h6>
          {car.brand} - {car.model}
        </h6>
        <p>{car.description}</p>
      </InfoStyled>
      <NameBoxStyled $colors={colors}>
        <div>{getInitials(car.owner)}</div>
        <p>{car.owner}</p>
      </NameBoxStyled>
      <DetailsBox>
        <div>
          <p>{car.km} KM</p>
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
  );
};
