import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledContainer } from "./style";
import { AsideHome } from "../../components/Aside";
import { useQuery } from "react-query";
import { kenzieApi } from "../../services/kenzie-car";
import { IKenzieCar } from "../../services/kenzie-car/interfaces";
import { isAxiosError } from "axios";
import { useContext } from "react";
import { CarContext } from "../../context/CarContext/carContext";
import { CarCard } from "../../components/carCard";

export const Homepage = () => {
  const { filteredCars } = useContext(CarContext);

  const getKenzieCars = async () => {
    try {
      const cars = await kenzieApi.get<IKenzieCar[]>("/cars?brand=chevrolet");

      return cars.data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.status === 500) throw error;

        if (error.status === undefined) throw error;
      }
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: "cars",
    queryFn: getKenzieCars,
  });

  return (
    <>
      <HeaderLoggedOut />

      <StyledContainer>
        <div className="bannerDiv">
          <div className="title">
            <h1>Motors Shop</h1>
            <h3 className="slogan">
              A melhor plataforma de anúncios de carros do país
            </h3>
          </div>
        </div>
        <div className="mainDiv">
          <AsideHome />
          <div>
            <div>
              {filteredCars.map((car: number) => {
                return <CarCard car={car} key={car.id} />;
              })}
            </div>
          </div>
        </div>
        <div className="nextDiv">
          <h2>1 de 2</h2>
          <button>Seguinte {">"}</button>
        </div>
      </StyledContainer>

      <Footer />
    </>
  );
};
