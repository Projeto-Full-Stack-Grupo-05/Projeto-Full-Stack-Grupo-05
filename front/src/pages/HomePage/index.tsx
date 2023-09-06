import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledContainer, StyledSalesBox } from "./style";
import { AsideHome } from "../../components/Aside";
// import { useQuery } from "react-query";
// import { kenzieApi } from "../../services/kenzie-car";
// import { IKenzieCar } from "../../services/kenzie-car/interfaces";
// import { isAxiosError } from "axios";
import { useContext } from "react";

import { CarCard } from "../../components/carCard";
import { CarContext } from "../../context/CarContext/carContext";

export const Homepage = () => {

  const { filteredCars } = useContext(CarContext);

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
          <StyledSalesBox>
              {filteredCars.map((car) => {
                return <CarCard car={car} key={car.sale.id} />;
              })}
          </StyledSalesBox>
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
