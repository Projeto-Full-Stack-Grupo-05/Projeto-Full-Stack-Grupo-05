import { StyledHeaderLoggedOut } from "./style";
import LogoNavBar from "../../assets/Motors shop NavBar.svg";
import { Link } from "react-router-dom";

export const HeaderLoggedOut = () => (
  <StyledHeaderLoggedOut>
    <nav>
      <img src={LogoNavBar} alt="Motors shop logo Header" />
      <div className="loginRegisterDiv">
        <h3>
          <Link to="/login">Fazer Login</Link>
        </h3>
        <div className="RegisterButton">
          <Link to="/register">Cadastrar</Link>
        </div>
      </div>
    </nav>
  </StyledHeaderLoggedOut>
);
