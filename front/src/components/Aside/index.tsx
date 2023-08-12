import { DialogActions, DialogContent, Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import styled from "@emotion/styled";
import { RangeInputKm, RangeInputValue } from "../inputRange/index";
import { useEffect, useState } from "react";
import {
  AsideContainer,
  AsideDivKm,
  ButtonOpenModal,
  DivFiltro,
  DivModal,
} from "./style";

export const AsideHome = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const StyledDialog = styled(Dialog)`
    .MuiDialog-paper {
      width: 100vw;
      margin: 0 auto;
    }
  `;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleKmChange = (_startValue: number, _endValue: number) => {};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleValueChange = (_startValue: number, _endValue: number) => {};

  const handleDialogToggle = () => {
    setDialogOpen(!dialogOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setDialogOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileButton = isMobile && (
    <ButtonOpenModal onClick={handleDialogToggle}>
      {dialogOpen ? "Ver anúncios " : "Filtros"}
    </ButtonOpenModal>
  );

  return (
    <>
      {isMobile ? (
        <div>
          {mobileButton}
          <StyledDialog open={dialogOpen} onClose={handleDialogToggle}>
            <DialogContent>
              <DivModal>
                <p>Filtro</p>
                <DialogActions>
                  <button onClick={handleDialogToggle}>
                    <MdClose size={21} />
                  </button>
                </DialogActions>
              </DivModal>

              <AsideContainer className="asideMobile">
                <h4>Marca</h4>
                <DivFiltro>
                  <button onClick={() => console.log("clickou")}>
                    General Motors
                  </button>
                  <button onClick={() => console.log("clickou")}>Fiat</button>
                  <button onClick={() => console.log("clickou")}>Ford</button>
                  <button onClick={() => console.log("clickou")}>Honda</button>
                  <button onClick={() => console.log("clickou")}>
                    Porsche
                  </button>
                  <button onClick={() => console.log("clickou")}>
                    Volswagen
                  </button>
                </DivFiltro>
                <h4>Modelo</h4>
                <DivFiltro>
                  <button onClick={() => console.log("clickou")}>Civic</button>
                  <button onClick={() => console.log("clickou")}>
                    Corolla
                  </button>
                  <button onClick={() => console.log("clickou")}>Cruze</button>
                  <button onClick={() => console.log("clickou")}>Fit</button>
                  <button onClick={() => console.log("clickou")}>Gol</button>
                  <button onClick={() => console.log("clickou")}>Ka</button>
                  <button onClick={() => console.log("clickou")}>Onix</button>
                  <button onClick={() => console.log("clickou")}>
                    Porsche 718
                  </button>
                </DivFiltro>
                <h4>Cor</h4>
                <DivFiltro>
                  <button onClick={() => console.log("clickou")}>Azul</button>
                  <button onClick={() => console.log("clickou")}>Branca</button>
                  <button onClick={() => console.log("clickou")}>Cinza</button>
                  <button onClick={() => console.log("clickou")}>Prata</button>
                  <button onClick={() => console.log("clickou")}>Preta</button>
                  <button onClick={() => console.log("clickou")}>Verde</button>
                </DivFiltro>
                <h4>Ano</h4>
                <DivFiltro>
                  <button onClick={() => console.log("clickou")}>2022</button>
                  <button onClick={() => console.log("clickou")}>2021</button>
                  <button onClick={() => console.log("clickou")}>2018</button>
                  <button onClick={() => console.log("clickou")}>2015</button>
                  <button onClick={() => console.log("clickou")}>2013</button>
                  <button onClick={() => console.log("clickou")}>2012</button>
                  <button onClick={() => console.log("clickou")}>2010</button>
                </DivFiltro>
                <h4>Combustível</h4>
                <DivFiltro>
                  <button onClick={() => console.log("clickou")}>
                    Elétrico
                  </button>
                  <button onClick={() => console.log("clickou")}>Flex</button>
                  <button onClick={() => console.log("clickou")}>
                    Híbrido
                  </button>
                </DivFiltro>
                <AsideDivKm>
                  <h4>Km</h4>
                  <div>
                    <RangeInputKm
                      min={0}
                      max={650000}
                      onValuesChange={handleKmChange}
                    />
                  </div>
                </AsideDivKm>
                <div>
                  <h4>Preço</h4>

                  <RangeInputValue
                    min={10}
                    max={550}
                    onValuesChange={handleValueChange}
                  />
                </div>

                <button className="buttonMobile" onClick={handleDialogToggle}>
                  Ver anúncios
                </button>
              </AsideContainer>
            </DialogContent>
          </StyledDialog>
        </div>
      ) : (
        <AsideContainer>
          <h4>Marca</h4>
          <DivFiltro>
            <button onClick={() => console.log("clickou")}>
              General Motors
            </button>
            <button onClick={() => console.log("clickou")}>Fiat</button>
            <button onClick={() => console.log("clickou")}>Ford</button>
            <button onClick={() => console.log("clickou")}>Honda</button>
            <button onClick={() => console.log("clickou")}>Porsche</button>
            <button onClick={() => console.log("clickou")}>Volswagen</button>
          </DivFiltro>
          <h4>Modelo</h4>
          <DivFiltro>
            <button onClick={() => console.log("clickou")}>Civic</button>
            <button onClick={() => console.log("clickou")}>Corolla</button>
            <button onClick={() => console.log("clickou")}>Cruze</button>
            <button onClick={() => console.log("clickou")}>Fit</button>
            <button onClick={() => console.log("clickou")}>Gol</button>
            <button onClick={() => console.log("clickou")}>Ka</button>
            <button onClick={() => console.log("clickou")}>Onix</button>
            <button onClick={() => console.log("clickou")}>Porsche 718</button>
          </DivFiltro>
          <h4>Cor</h4>
          <DivFiltro>
            <button onClick={() => console.log("clickou")}>Azul</button>
            <button onClick={() => console.log("clickou")}>Branca</button>
            <button onClick={() => console.log("clickou")}>Cinza</button>
            <button onClick={() => console.log("clickou")}>Prata</button>
            <button onClick={() => console.log("clickou")}>Preta</button>
            <button onClick={() => console.log("clickou")}>Verde</button>
          </DivFiltro>

          <h4>Ano</h4>
          <DivFiltro>
            <button onClick={() => console.log("clickou")}>2022</button>
            <button onClick={() => console.log("clickou")}>2021</button>
            <button onClick={() => console.log("clickou")}>2018</button>
            <button onClick={() => console.log("clickou")}>2015</button>
            <button onClick={() => console.log("clickou")}>2013</button>
            <button onClick={() => console.log("clickou")}>2012</button>
            <button onClick={() => console.log("clickou")}>2010</button>
          </DivFiltro>

          <h4>Combustível</h4>
          <DivFiltro>
            <button onClick={() => console.log("clickou")}>Elétrico</button>
            <button onClick={() => console.log("clickou")}>Flex</button>
            <button onClick={() => console.log("clickou")}>Híbrido</button>
          </DivFiltro>

          <AsideDivKm>
            <h4>Km</h4>
            <div>
              <RangeInputKm
                min={0}
                max={650000}
                onValuesChange={handleKmChange}
              />
            </div>
          </AsideDivKm>

          <AsideDivKm>
            <h4>Preço</h4>

            <RangeInputValue
              min={10}
              max={550}
              onValuesChange={handleValueChange}
            />
          </AsideDivKm>

          <button className="buttonDesktop">Limpar filtros</button>
        </AsideContainer>
      )}
    </>
  );
};
