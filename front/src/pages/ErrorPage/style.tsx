import { styled } from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  height: 100vh;

  @media (min-width: 480px) {
    gap: 50px;
  }

  div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 12px;
    margin-top: 30vh;
    padding: 0 22px;

    @media (min-width: 480px) {
      flex-direction: row;
    }

    svg {
      min-height: 32px;
      min-width: 32px;
    }

    h3 {
      max-width: 370px;
      text-align: center;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--color-brand-1);

      @media (min-width: 480px) {
        max-width: none;
        width: 320px;
        padding-left: 12px;
        padding-bottom: 0;
        border-bottom: none;
        text-align: start;
        border-left: 2px solid var(--color-brand-1);
      }

      @media (min-width: 720px) {
        max-width: none;
        width: fit-content;
        padding-left: 12px;
        padding-bottom: 0;
        border-bottom: none;
        text-align: start;
        border-left: 2px solid var(--color-brand-1);
      }
    }
  }

  button {
    padding: 12px 28px;
    width: max-content;
    border-radius: 4px;
    border: 2px solid var(--color-grey-4);
    color: var(--color-grey-0);
    font-size: 1.75rem;
    font-weight: 600;
    background: none;

    &:hover {
      border: 2px solid var(--color-grey-0);
      color: var(--color-white-fixed);
      background-color: var(--color-grey-0);
    }
  }
`;

export default Main;
