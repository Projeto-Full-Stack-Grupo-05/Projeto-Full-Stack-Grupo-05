import { styled } from "styled-components";

export const Main = styled.main`
  height: 90vh;
`;
export const Divposition = styled.div`
    height: 250px;
    width: 100%;
    position: absolute;
    background: var(--color-brand-1);
    @media(max-width:768px){
        height: 270px;
    }
}
`;
export const SectionPerfil = styled.section`
  position: relative;
  z-index: 1000;
  width: 80%;
  background: #fff;
  margin: 0 auto;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 95%;
    height: 30%;
  }
`;
export const ContainerSection = styled.div`
  width: 80%;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  justify-content: center;
  margin: 50px auto 0px;

  div {
    display: flex;
    gap: 10px;

    span {
      background: var(--color-brand-4);
      color: var(--color-brand-1);
      font-size: 1.2rem;
      height: 100%;
      padding: 5px;
      border-radius: 6px;
    }
  }

  p {
    font-size: 1.55rem;
    color: var(--color-grey-3);
  }

  button {
    background: transparent;
    border: solid 1.5px var(--color-brand-1);
    color: var(--color-brand-1);
    width: 150px;
    height: 35px;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 30%;
    padding: 30px;
    margin: 50px auto 0px;
  }
`;
export const DivSectionBGDGray = styled.div`
  width: 100%;
  height: 195px;
  position: absolute;
  background: var(--color-grey-8);
  bottom: 460px;

  @media (width: 2560px) {
    height: 205px;
    bottom: 1218px;
  }

  @media (max-width: 1024px) {
    height: 205px;
    bottom: 367px;
  }
  @media (max-width: 768px) {
    height: 195px;
    bottom: 375px;
  }
  @media (max-width: 425px) {
    height: 285px;
    bottom: 262px;
  }
  @media (max-width: 375px) {
    height: 312px;
    bottom: 242px;
  }
  @media (max-width: 320px) {
    height: 337px;
    bottom: 167px;
  }
`;
