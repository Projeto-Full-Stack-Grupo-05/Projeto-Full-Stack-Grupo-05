import Logo from "../../assets/logoNav.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "./style";

export default function Navbar() {
  return (
    <Header>
      <img src={Logo} alt="Logo da Motors Shop." />

      <nav>
        <button>
          <GiHamburgerMenu />
        </button>
      </nav>
    </Header>
  );
}
