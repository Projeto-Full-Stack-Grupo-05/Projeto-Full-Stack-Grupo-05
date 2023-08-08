import { StyledHeaderLoggedIn } from "./style";
import LogoNavBar from "../../assets/Motors shop NavBar.svg";

export const HeaderLoggedIn = () => (
  <StyledHeaderLoggedIn>
    <nav>
      <img src={LogoNavBar} alt="Motors shop logo Header" />
      <div>
        <div className="circle"></div>
        <h3>Samuel Leão</h3>
      </div>
    </nav>
  </StyledHeaderLoggedIn>
);
