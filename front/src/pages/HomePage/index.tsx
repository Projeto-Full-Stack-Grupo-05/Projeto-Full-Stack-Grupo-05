import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
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

  if (error) return <ErrorPage />;

  return (
    <div>
      <HeaderLoggedOut />
      <ul>
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          data!.map((car) => <li>{car.name}</li>)
        )}
      </ul>
      <Footer />
    </div>
  );
};
