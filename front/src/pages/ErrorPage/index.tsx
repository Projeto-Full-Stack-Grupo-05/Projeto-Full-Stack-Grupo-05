import { Footer } from "../../components/Footer";
import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";

export default function ErrorPage() {
  return (
    <div>
      <HeaderLoggedOut />
      <main>
        <h2>Deu ruim</h2>
      </main>
      <Footer />
    </div>
  );
}
