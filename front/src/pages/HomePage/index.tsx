import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledContainer } from "./style";
import carBanner from "../../assets/car banner.svg";

export const Homepage = () => (
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
  </StyledContainer>
);
