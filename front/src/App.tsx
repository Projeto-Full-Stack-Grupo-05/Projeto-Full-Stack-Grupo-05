import AppRouter from "./Routes/routes";
import { CarProvider } from "./context/CarContext/carContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CarProvider>
        <AppRouter />
      </CarProvider>
    </>
  );
}

export default App;
