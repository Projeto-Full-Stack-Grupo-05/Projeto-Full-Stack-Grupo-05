import { StyledFooter } from "./style";
import LogoFooter from "../../assets/Motors shop.svg";
import { BiChevronUp } from "react-icons/bi";

export const Footer = () => (
  <StyledFooter>
    <img src={LogoFooter} alt="Motors shop logo" />
    <h4>© 2022 - Todos os direitos reservados.</h4>
    <div className="square">
      <BiChevronUp size={20} color={"white"} />
    </div>
  </StyledFooter>
);
