import { StyledHeaderLoggedIn, StyledFixedHeader } from "./style";
import { useContext } from "react";
import LogoNavBar from "../../assets/Motors shop NavBar.svg";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { UserMenu } from "../UserMenu";

export const HeaderLoggedIn = () => {
  const [active, setActive] = useState(false);
  const { user, userMenuIsOpen, setUserMenuIsOpen} = useContext(UserContext);

  return (
    <StyledFixedHeader theme={{ active }}>
      <StyledHeaderLoggedIn>
        <nav>
          <img src={LogoNavBar} alt="Motors shop logo Header" />
          <button onClick={() => setActive(!active)}>
            <IoMdMenu />
          </button>
          <div>
            <div className="circle" onClick={() => setUserMenuIsOpen(!userMenuIsOpen)}></div>
            <h3>{user?.name}</h3>
          </div>
        </nav>
      </StyledHeaderLoggedIn>
      {
        userMenuIsOpen && 
        <UserMenu />
      }

      <menu>
        <div className="circle"></div>
        <h3>{user?.name}</h3>
      </menu>
    </StyledFixedHeader>
  );
};
