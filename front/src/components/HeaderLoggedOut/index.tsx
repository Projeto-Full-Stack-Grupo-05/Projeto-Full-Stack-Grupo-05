import { StyledHeaderLoggedOut, StyledFixedHeader } from "./style";
import LogoNavBar from "../../assets/Motors shop NavBar.svg";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

export const HeaderLoggedOut = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledFixedHeader>
      <StyledHeaderLoggedOut theme={{ active }}>
        <nav>
          <img src={LogoNavBar} alt="Motors shop logo Header" />
          <button onClick={() => setActive(!active)}>
            <IoMdMenu />
          </button>
          <div className="loginRegisterDiv">
            <Link to="/login">Fazer Login</Link>
            <Link to="/register">Cadastrar</Link>
          </div>
        </nav>
      </StyledHeaderLoggedOut>
      <menu>
        <Link to="/login">Fazer Login</Link>
        <Link to="/register">Cadastrar</Link>
      </menu>
    </StyledFixedHeader>
  );
};
