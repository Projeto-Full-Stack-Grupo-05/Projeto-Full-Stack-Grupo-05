import { styled } from "styled-components";

export const ButtonOpenModal = styled.button`
  width: 200px;
  background: var(--color-brand-2);
  border: transparent;
  color: var(--color-white-fixed);
  height: 40px;
  text-align: center;
  align-self: center;
  margin: 50px 0px 20px 0;
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 5px;

  h4 {
    padding-bottom: 13px;
  }
  button {
    margin-left: 10px;
    width: 45%;
    text-align: start;
    background: transparent;
    border: transparent;
    color: var(--color-grey-3);
    font-size: 1.6rem;
    font-weight: bold;
  }
  .buttonDesktop {
    width: 100%;
    max-width: 315px;
    background: var(--color-brand-2);
    color: var(--color-white-fixed);
    height: 40px;
    text-align: center;
    margin: 50px 0px 20px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    gap: 15px;

    .buttonMobile {
      width: 200px;
      background: var(--color-brand-2);
      color: var(--color-white-fixed);
      height: 40px;
      text-align: center;
      align-self: center;
      margin: 50px 0px 20px 0;
    }
  }
`;

export const DivFiltro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AsideDivKm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 30px 0px;
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  button {
    border: transparent;
    background: transparent;
  }
`;
