import { DialogActions, DialogContent, Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import styled from "@emotion/styled";
import { RangeInputKm, RangeInputValue } from "../inputRange/index";
import { useContext, useEffect, useState } from "react";
import {
  AsideContainer,
  AsideDivKm,
  ButtonOpenModal,
  DivFiltro,
  DivModal,
} from "./style";
import { CarContext } from "../../context/CarContext/carContext";

export const AsideHome = () => {
  const { handleFilterChange, clearFilters } = useContext(CarContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const StyledDialog = styled(Dialog)`
    .MuiDialog-paper {
      width: 100vw;
      margin: 0 auto;
    }
  `;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleKmChange = (startValue: number, endValue: number) => {
    handleFilterChange("kmStart", startValue);
    handleFilterChange("kmEnd", endValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleValueChange = (startValue: number, endValue: number) => {
    handleFilterChange("priceStart", startValue*1000);
    handleFilterChange("priceEnd", endValue*1000);
  };

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
                  <button onClick={() => handleFilterChange("brand", "General Motors")}>
                    General Motors
                  </button>
                  <button onClick={() => handleFilterChange("brand", "Fiat")}>Fiat</button>
                  <button onClick={() => handleFilterChange("brand", "Ford")}>Ford</button>
                  <button onClick={() => handleFilterChange("brand", "Honda")}>Honda</button>
                  <button onClick={() => handleFilterChange("brand", "Porsche")}>
                    Porsche
                  </button>
                  <button onClick={() => handleFilterChange("brand", "Volswagen")}>
                    Volswagen
                  </button>
                </DivFiltro>
                <h4>Modelo</h4>
                <DivFiltro>
                  <button onClick={() => handleFilterChange("model", "Civic")}>Civic</button>
                  <button onClick={() => handleFilterChange("model", "Corolla")}>
                    Corolla
                  </button>
                  <button onClick={() => handleFilterChange("model", "Cruze")}>Cruze</button>
                  <button onClick={() => handleFilterChange("model", "Fit")}>Fit</button>
                  <button onClick={() => handleFilterChange("model", "Gol")}>Gol</button>
                  <button onClick={() => handleFilterChange("model", "Ka")}>Ka</button>
                  <button onClick={() => handleFilterChange("model", "Onix")}>Onix</button>
                  <button onClick={() => handleFilterChange("model", "Porsche 718")}>
                    Porsche 718
                  </button>
                </DivFiltro>
                <h4>Cor</h4>
                <DivFiltro>
                  <button onClick={() => handleFilterChange("color", "Azul")}>Azul</button>
                  <button onClick={() => handleFilterChange("color", "Branca")}>Branca</button>
                  <button onClick={() => handleFilterChange("color", "Cinza")}>Cinza</button>
                  <button onClick={() => handleFilterChange("color", "Prata")}>Prata</button>
                  <button onClick={() => handleFilterChange("color", "Preta")}>Preta</button>
                  <button onClick={() => handleFilterChange("color", "Verde")}>Verde</button>
                </DivFiltro>
                <h4>Ano</h4>
                <DivFiltro>
                  <button onClick={() => handleFilterChange("year", 2022)}>2022</button>
                  <button onClick={() => handleFilterChange("year", 2021)}>2021</button>
                  <button onClick={() => handleFilterChange("year", 2018)}>2018</button>
                  <button onClick={() => handleFilterChange("year", 2015)}>2015</button>
                  <button onClick={() => handleFilterChange("year", 2013)}>2013</button>
                  <button onClick={() => handleFilterChange("year", 2012)}>2012</button>
                  <button onClick={() => handleFilterChange("year", 2010)}>2010</button>
                </DivFiltro>
                <h4>Combustível</h4>
                <DivFiltro>
                  <button onClick={() => handleFilterChange("fuel", 3)}>
                    Elétrico
                  </button>
                  <button onClick={() => handleFilterChange("fuel", 1)}>
                    Flex</button>
                  <button onClick={() => handleFilterChange("fuel", 2)}>
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
            <button onClick={() => handleFilterChange("brand", "General Motors")}>
              General Motors
            </button>
            <button onClick={() => handleFilterChange("brand", "Fiat")}>
              Fiat
            </button>
            <button onClick={() => handleFilterChange("brand", "Ford")}>
              Ford
            </button>
            <button onClick={() => handleFilterChange("brand", "Honda")}>
              Honda
            </button>
            <button onClick={() => handleFilterChange("brand", "Porsche")}>
              Porsche
            </button>
            <button onClick={() => handleFilterChange("brand", "Volswagen")}>
              Volswagen
            </button>
          </DivFiltro>
          <h4>Modelo</h4>
          <DivFiltro>
            <button onClick={() => handleFilterChange("model", "Civic")}>
              Civic
            </button>
            <button onClick={() => handleFilterChange("model", "Corolla")}>
              Corolla
            </button>
            <button onClick={() => handleFilterChange("model", "Cruze")}>
              Cruze
            </button>
            <button onClick={() => handleFilterChange("model", "Fit")}>
              Fit
            </button>
            <button onClick={() => handleFilterChange("model", "Gol")}>
              Gol
            </button>
            <button onClick={() => handleFilterChange("model", "Ka")}>
              Ka
            </button>
            <button onClick={() => handleFilterChange("model", "Onix")}>
              Onix
            </button>
            <button onClick={() => handleFilterChange("model", "Porsche 718")}>
              Porsche 718
            </button>
          </DivFiltro>
          <h4>Cor</h4>
          <DivFiltro>
            <button onClick={() => handleFilterChange("color", "Azul")}>
              Azul
            </button>
            <button onClick={() => handleFilterChange("color", "Branca")}>
              Branca
            </button>
            <button onClick={() => handleFilterChange("color", "Cinza")}>
              Cinza
            </button>
            <button onClick={() => handleFilterChange("color", "Prata")}>
              Prata
            </button>
            <button onClick={() => handleFilterChange("color", "Preta")}>
              Preta
            </button>
            <button onClick={() => handleFilterChange("color", "Verde")}>
              Verde
            </button>
          </DivFiltro>

          <h4>Ano</h4>
          <DivFiltro>
            <button onClick={() => handleFilterChange("year", 2022)}>
              2022
            </button>
            <button onClick={() => handleFilterChange("year", 2021)}>
              2021
            </button>
            <button onClick={() => handleFilterChange("year", 2018)}>
              2018
            </button>
            <button onClick={() => handleFilterChange("year", 2015)}>
              2015
            </button>
            <button onClick={() => handleFilterChange("year", 2013)}>
              2013
            </button>
            <button onClick={() => handleFilterChange("year", 2012)}>
              2012
            </button>
            <button onClick={() => handleFilterChange("year", 2010)}>
              2010
            </button>
          </DivFiltro>

          <h4>Combustível</h4>
          <DivFiltro>
            <button onClick={() => handleFilterChange("fuel", 3)}>
              Elétrico
            </button>
            <button onClick={() => handleFilterChange("fuel", 1)}>Flex</button>
            <button onClick={() => handleFilterChange("fuel", 2)}>
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

          <AsideDivKm>
            <h4>Preço</h4>

            <RangeInputValue
              min={10}
              max={550}
              onValuesChange={handleValueChange}
            />
          </AsideDivKm>

          <button className="buttonDesktop"
                  onClick={() => clearFilters()}>Limpar filtros</button>
        </AsideContainer>
      )}
    </>
  );
};
