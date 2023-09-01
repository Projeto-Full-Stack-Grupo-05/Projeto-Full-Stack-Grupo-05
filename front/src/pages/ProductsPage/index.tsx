import { Footer } from "../../components/Footer";
import { HeaderLoggedIn } from "../../components/HeaderLoggedIn";
import { StyledMain } from "./style";
import { Link } from "react-router-dom";
import { CommentContext } from "../../context/CommentContext/CommentsContext";
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../context/CarContext/carContext";

export const ProductsPage = () => {
  const { commentRegister, getAllComments, comments } =
    useContext(CommentContext);

  const { getCar, saleCar } = useContext(CarContext);

  const [currentComment, setCurrentComment] = useState<string>("");

  const text = ["Gostei muito!", "Incrível!", "Recomendarei para meus amigos!"];

  useEffect(() => {
    const carId = localStorage.getItem("@CarID");
    (async () => {
      await getCar(carId!);
      await getAllComments(carId!);
      console.log(comments);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const whatsappButton = document.getElementById("whatsapp-button");

  if (whatsappButton) {
    whatsappButton.addEventListener("click", () => {
      const phoneNumber = "11963726508";
      const message =
        "Olá! Me interessei pelo carro do anúncio e gostaria de negociar. Podemos conversar mais sobre isso?";

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl);
    });
  }

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const userId = localStorage.getItem("@USERID");
    const commentData = {
      text: currentComment,
      user_id: userId!,
      sale_id: "3",
    };
    
    try {
      await commentRegister(commentData);
      const carId = localStorage.getItem("@CarID");
      await getAllComments(carId!); 
      setCurrentComment("");
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <HeaderLoggedIn />
      <StyledMain>
        <div className="blue"></div>
        <div className="MainSection">
          <div className="divOne">
            <div className="imgDiv">
              <img src={saleCar?.img_url} alt={saleCar?.title} />
            </div>
            <div className="detailsDiv">
              <h1>{saleCar?.title}</h1>
              <div className="priceDiv">
                <div className="yearDiv">
                  <div className="cardDiv">
                    <h6>{saleCar?.year}</h6>
                  </div>
                  <div className="cardDiv">
                    <h6>{saleCar?.kilometers}KM</h6>
                  </div>
                </div>
                <h5>R$ {saleCar?.price}</h5>
              </div>
              <button id="whatsapp-button">Comprar</button>
            </div>
            <div className="desDiv">
              <h1>Descrição</h1>
              <p>{saleCar?.description}</p>
            </div>
          </div>
          <div className="asideSection">
            <div className="firstDiv">
              <h4>Fotos</h4>
              <div className="imagesDiv">
                {saleCar?.gallery.map((img) => (
                  <div className="imageDiv" key={saleCar.id}>
                    <img src={img} alt="Mini car" />
                  </div>
                ))}
              </div>
            </div>
            <div className="profileDiv">
              <div className="ball"></div>
              <h4>Samuel leão</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <Link to="/profile" className="ads">
                Ver todos anuncios
              </Link>
            </div>
          </div>
        </div>
        <div className="MainSectionTwo">
          <div className="divOne">
            <div className="commentsContainerDiv">
              <h1>Comentários</h1>
              <div className="commentsDiv">
                {comments.map((comment) => (
                  <div className="commentDiv">
                    <div className="profileDiv">
                      <div className="ball"></div>
                      <h5>{comment.user.name}</h5>
                      <div className="miniBall"></div>
                      <h6>{comment.createdAt}</h6>
                    </div>
                    <p>{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="postDiv">
              <div className="profileDiv">
                <div className="ball"></div>
                <h5>Samuel leão</h5>
              </div>
              <form>
                <textarea
                  id="comment"
                  placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                  value={currentComment}
                  onChange={(e) => setCurrentComment(e.target.value)}
                ></textarea>
                <button
                  type="button"
                  className="commentButton"
                  onClick={(e) => onSubmit(e)}
                >
                  comentar
                </button>
              </form>
              <div className="optionsDiv">
                {text.map((msg) => (
                  <div
                    className="cards"
                    onClick={() =>
                      setCurrentComment(`${currentComment} ${msg}`)
                    }
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="displayNone"></div>
        </div>
      </StyledMain>
      <Footer />
    </>
  );
};
