import { Footer } from "../../components/Footer";
import { HeaderLoggedIn } from "../../components/HeaderLoggedIn";
import { Main } from "./style";

export default function ProfilePage() {
  return (
    <>
      <HeaderLoggedIn />

      <Main>
        <h2>Profile View</h2>
      </Main>

      <Footer />
    </>
  );
}
