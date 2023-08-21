import { Footer } from "../../components/Footer";
import { HeaderLoggedIn } from "../../components/HeaderLoggedIn";

export const ProductsPage = () => {
  return (
    <>
      <HeaderLoggedIn />
      <main>
        <section>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h1>mercedes</h1>
          </div>
          <div>
            <h4>Descrição</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4>Comentários</h4>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
            </div>
          </div>
          <div></div>
        </section>
        <section>
          <div></div>
          <div></div>
        </section>
      </main>
      <Footer />
    </>
  );
};
