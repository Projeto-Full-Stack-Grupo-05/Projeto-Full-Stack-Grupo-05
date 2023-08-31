import AppRouter from "./Routes/routes";
import { CarProvider } from "./context/CarContext/carContext";
import { CommentProvider } from "./context/CommentContext/CommentsContext";
import { UserProvider } from "./context/UserContext/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CarProvider>
        <UserProvider>
          <CommentProvider>
            <AppRouter />
          </CommentProvider>
        </UserProvider>
      </CarProvider>
    </>
  );
}

export default App;
