import { Footer } from "../../components/Footer";
import { HeaderLoggedIn } from "../../components/HeaderLoggedIn";
import { StyledMain } from "./style";
import car from "../../assets/car.svg";
import miniCar from "../../assets/miniCar.svg";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  return (
    <>
      <HeaderLoggedIn />
      <StyledMain>
        <div className="MainSection">
          <div className="divOne">
            <div className="imgDiv">
              <img src={car} alt="Car" />
            </div>
            <div className="detailsDiv">
              <h1>
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
              </h1>
              <div className="priceDiv">
                <div className="yearDiv">
                  <div className="cardDiv">
                    <h6>2013</h6>
                  </div>
                  <div className="cardDiv">
                    <h6>0 KM</h6>
                  </div>
                </div>
                <h5>R$ 00.000,00</h5>
              </div>
              <button>Comprar</button>
            </div>
            <div className="desDiv">
              <h1>Descrição</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="asideSection">
            <div className="firstDiv">
              <h4>Fotos</h4>
              <div className="imagesDiv">
                <div className="imageDiv">
                  <img src={miniCar} alt="Mini car" />
                </div>
                <div className="imageDiv">
                  <img src={miniCar} alt="Mini car" />
                </div>
                <div className="imageDiv">
                  <img src={miniCar} alt="Mini car" />
                </div>
                <div className="imageDiv">
                  <img src={miniCar} alt="Mini car" />
                </div>
                <div className="imageDiv">
                  <img src={miniCar} alt="Mini car" />
                </div>
                <div className="imageDiv">
                  <img src={miniCar} alt="Mini car" />
                </div>
              </div>
            </div>
            <div className="profileDiv">
              <div className="ball"></div>
              <h4>Samuel leão</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <Link to="/dashboard" className="ads">
                Ver todos anuncios
              </Link>
            </div>
          </div>
        </div>
        <div className="secondSection">
          <div className="divTwo">
            <div className="commentsContainerDiv">
              <h1>Comentários</h1>
              <div className="commentsDiv">
                <div className="commentDiv">
                  <div className="profileDiv">
                    <div className="ball"></div>
                    <h5>Júlia lima</h5>
                    <div className="miniBall"></div>
                    <h6>Há 6 dias</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="commentDiv">
                  <div className="profileDiv">
                    <div className="ball"></div>
                    <h5>Júlia lima</h5>
                    <div className="miniBall"></div>
                    <h6>Há 6 dias</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="commentDiv">
                  <div className="profileDiv">
                    <div className="ball"></div>
                    <h5>Júlia lima</h5>
                    <div className="miniBall"></div>
                    <h6>Há 6 dias</h6>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="postDiv">
              <div className="profileDiv">
                <div className="ball"></div>
                <h5>Samuel leão</h5>
              </div>
              <input type="text" />
              <div className="optionsDiv">
                <div className="cards">Gostei muito!</div>
                <div className="cards">Incrível</div>
                <div className="cards">Recomendarei para meus amigos!</div>
              </div>
            </div>
          </div>
          <div className="asidePositionDiv">
            <div className="positionDiv"></div>
          </div>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
