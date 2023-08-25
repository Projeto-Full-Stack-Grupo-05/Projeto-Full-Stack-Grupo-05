import { Footer } from "../../components/Footer";
import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { GiPoliceCar } from "react-icons/gi";
import Main from "./style";

export default function ErrorPage() {
  return (
    <div>
      <HeaderLoggedOut />
      <Main>
        <div>
          <GiPoliceCar />
          <h3>Não conseguimos prover este serviço!</h3>
        </div>

        <button>Repetir</button>
      </Main>
      <Footer />
    </div>
  );
}
