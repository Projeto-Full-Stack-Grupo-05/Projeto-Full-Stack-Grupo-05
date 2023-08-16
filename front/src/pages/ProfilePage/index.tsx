import { useQuery } from "react-query";
import { Footer } from "../../components/Footer";
import { HeaderLoggedIn } from "../../components/HeaderLoggedIn";
import { Container, Main } from "./style";
import { isAxiosError } from "axios";
import { CarCard } from "../../components/carCard";
import ErrorPage from "../ErrorPage";
import { api } from "../../services/api";
import { IMotorsSales } from "../../services/api/interfaces";

export default function ProfilePage() {
  const getKenzieCars = async () => {
    try {
      // const cars = await api.get<IMotorsSales[]>("/sales");

      return [
        {
          id: 1,
          img: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/05/BMW-Serie-3-2023-9.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
          model: "Série 3",
          brand: "BMW",
          description: "Sou uma descrição assertiva.",
          owner: "Ranier Dias",
          km: 200000,
          year: 2023,
          price: 365000,
        },
        {
          id: 2,
          img: "https://s2-autoesporte.glbimg.com/C0ky--V9TFgHCtjySZi1azlL-P0=/0x0:1500x791/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/s/i/UQSXstS6Krrpc4DRjrhQ/bmw-i7-09.jpg",
          model: "i7",
          brand: "BMW",
          description: "Sou uma descrição assertiva.",
          owner: "Thiago Adams",
          km: 310000,
          year: 2020,
          price: 459000,
        },
        {
          id: 3,
          img: "https://s2-autoesporte.glbimg.com/S_COEpqnvoKmJ7YnAtRzyc6mazk=/0x0:1917x1078/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/d/q/Z4Ac1ETCi1diySBgBU2Q/20210411-162238.jpg",
          model: "Série 3 320i",
          brand: "BMW",
          description: "Sou uma descrição assertiva.",
          owner: "Nielson Adams",
          km: 240000,
          year: 2021,
          price: 418000,
        },
        {
          id: 4,
          img: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/10/BMW-iX-xDrive-i40-Mineral-White-003-e1634235799239.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
          model: "iX",
          brand: "BMW",
          description: "Sou uma descrição assertiva.",
          owner: "Ranier Dias",
          km: 3200000000000000,
          year: 2021,
          price: 380000,
        },
        {
          id: 5,
          img: "https://s2-autoesporte.glbimg.com/S_COEpqnvoKmJ7YnAtRzyc6mazk=/0x0:1917x1078/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/d/q/Z4Ac1ETCi1diySBgBU2Q/20210411-162238.jpg",
          model: "Série 3 320i",
          brand: "BMW",
          description: "Sou uma descrição assertiva.",
          owner: "Ash Ketchup",
          km: 312000,
          year: 2021,
          price: 400000,
        },
      ];
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.status === 500) throw error;

        if (error.status === undefined) throw error;
      }
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: "cars",
    queryFn: getKenzieCars,
  });

  if (error) <ErrorPage />;

  return (
    <>
      <HeaderLoggedIn />

      <Main>
        <Container>
          <section>
            <h2>Anúncios</h2>

            <ul>
              {data?.map((car) => (
                <CarCard car={car} key={car.id} />
              ))}
            </ul>

            <nav>
              <div>
                <span>1 </span>
                <span>de 2</span>
              </div>

              <a href="/">Seguinte {">"}</a>
            </nav>
          </section>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
