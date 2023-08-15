import { StyledHeaderLoggedIn, StyledFixedHeader } from "./style";
import LogoNavBar from "../../assets/Motors shop NavBar.svg";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

export const HeaderLoggedIn = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledFixedHeader theme={{ active }}>
      <StyledHeaderLoggedIn>
        <nav>
          <img src={LogoNavBar} alt="Motors shop logo Header" />
          <button onClick={() => setActive(!active)}>
            <IoMdMenu />
          </button>
          <div>
            <div className="circle"></div>
            <h3>Samuel Leão</h3>
          </div>
        </nav>
      </StyledHeaderLoggedIn>

      <menu>
        <div className="circle"></div>
        <h3>Samuel Leão</h3>
      </menu>
    </StyledFixedHeader>
  );
};
