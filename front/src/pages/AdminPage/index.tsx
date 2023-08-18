import { HeaderLoggedIn } from "../../components/HeaderLoggedIn";
import { Footer } from "../../components/Footer";
import ModalAddAnnounce from "../../components/ModalAddAnnounce";

export const AdminPage = () => (
  <>
    <HeaderLoggedIn />
    <Footer />
    <ModalAddAnnounce/>
  </>
);
