import { StyledHeaderLoggedIn, StyledFixedHeader } from "./style";
import LogoNavBar from "../../assets/Motors shop NavBar.svg";

export const HeaderLoggedIn = () => (
  <StyledFixedHeader>
    <StyledHeaderLoggedIn>
      <nav>
        <img src={LogoNavBar} alt="Motors shop logo Header" />
        <div>
          <div className="circle"></div>
          <h3>Samuel Leão</h3>
        </div>
      </nav>
    </StyledHeaderLoggedIn>
  </StyledFixedHeader>
);
