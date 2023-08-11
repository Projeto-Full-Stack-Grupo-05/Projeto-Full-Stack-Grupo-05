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
  const handleKmChange = (startValue: number, endValue: number) => {};

  const handleValueChange = (startValue: number, endValue: number) => {};

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
                  <button>General Motors</button>
                  <button>Fiat</button>
                  <button>Ford</button>
                  <button>Honda</button>
                  <button>Porsche</button>
                  <button>Volswagen</button>
                </DivFiltro>
                <h4>Modelo</h4>
                <DivFiltro>
                  <button>Civic</button>
                  <button>Corolla</button>
                  <button>Cruze</button>
                  <button>Fit</button>
                  <button>Gol</button>
                  <button>Ka</button>
                  <button>Onix</button>
                  <button>Porsche 718</button>
                </DivFiltro>
                <h4>Cor</h4>
                <DivFiltro>
                  <button>Azul</button>
                  <button>Branca</button>
                  <button>Cinza</button>
                  <button>Prata</button>
                  <button>Preta</button>
                  <button>Verde</button>
                </DivFiltro>
                <h4>Ano</h4>
                <DivFiltro>
                  <button>2022</button>
                  <button>2021</button>
                  <button>2018</button>
                  <button>2015</button>
                  <button>2013</button>
                  <button>2012</button>
                  <button>2010</button>
                </DivFiltro>
                <h4>Combustível</h4>
                <DivFiltro>
                  <button>Elétrico</button>
                  <button>Flex</button>
                  <button>Híbrido</button>
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
            <button>General Motors</button>
            <button>Fiat</button>
            <button>Ford</button>
            <button>Honda</button>
            <button>Porsche</button>
            <button>Volswagen</button>
          </DivFiltro>
          <h4>Modelo</h4>
          <DivFiltro>
            <button>Civic</button>
            <button>Corolla</button>
            <button>Cruze</button>
            <button>Fit</button>
            <button>Gol</button>
            <button>Ka</button>
            <button>Onix</button>
            <button>Porsche 718</button>
          </DivFiltro>
          <h4>Cor</h4>
          <DivFiltro>
            <button>Azul</button>
            <button>Branca</button>
            <button>Cinza</button>
            <button>Prata</button>
            <button>Preta</button>
            <button>Verde</button>
          </DivFiltro>

          <h4>Ano</h4>
          <DivFiltro>
            <button>2022</button>
            <button>2021</button>
            <button>2018</button>
            <button>2015</button>
            <button>2013</button>
            <button>2012</button>
            <button>2010</button>
          </DivFiltro>

          <h4>Combustível</h4>
          <DivFiltro>
            <button>Elétrico</button>
            <button>Flex</button>
            <button>Híbrido</button>
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
