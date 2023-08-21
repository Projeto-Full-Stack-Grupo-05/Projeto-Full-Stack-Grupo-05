import AppRouter from "./Routes/routes";
import { CarProvider } from "./context/CarContext/carContext";
import { UserProvider } from "./context/UserContext/UserContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
        <CarProvider>
      <UserProvider>
          <AppRouter />
      </UserProvider>
        </CarProvider>
    </>
  );
}

export default App;
