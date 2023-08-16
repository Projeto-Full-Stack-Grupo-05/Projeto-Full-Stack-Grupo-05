import { Footer } from "../../components/Footer";
import { HeaderLoggedIn } from "../../components/HeaderLoggedIn";
import {
  ContainerSection,
  DivSectionBGDGray,
  Divposition,
  Main,
  SectionPerfil,
} from "./style";

export default function ProfilePage() {
  return (
    <>
      <HeaderLoggedIn />
      <Divposition />
      <SectionPerfil>
        <ContainerSection>
          <img src="" alt="foto perfil" />

          <div>
            <h6>Samuel Leão</h6>
            <span>Anunciante</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500sLorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
          <button>Criar anuncio</button>
        </ContainerSection>
      </SectionPerfil>
      <DivSectionBGDGray />
      <Main>
        <h2>Profile View</h2>
      </Main>

      <Footer />
    </>
  );
}
