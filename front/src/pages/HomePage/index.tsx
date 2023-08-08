import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledContainer } from "./style";
import carBanner from "../../assets/car banner.svg";
import { useQuery } from "react-query";
import kenzieApi from "../../services/kenzie-car";
import { IKenzieCar } from "../../services/kenzie-car/interfaces";
import { isAxiosError } from "axios";
import ErrorPage from "../ErrorPage";

export const Homepage = () => {
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
    <StyledContainer>
    <HeaderLoggedOut />
    <img src={carBanner} alt="Car Banner" className="carBanner" />
    <h1></h1>
    <div className="mainDiv">
      <aside>
        <h1>Marca</h1>
        <h4>General</h4>
        <h4>General</h4>
        <h4>General</h4>
        <h4>General</h4>
      </aside>
      <div>
        <div>
          <h1>Cards</h1>
        </div>
      </div>
    </div>
    <div className="nextDiv">
      <h2>1 de 2</h2>
      <button>Seguinte</button>
    </div>
    <Footer />
  </StyledContainer>)
};
