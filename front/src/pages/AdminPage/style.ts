import { styled } from "styled-components";

export const Main = styled.main`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 32px;
    padding: 0 28px;

    ul {
      list-style: none;
      display: flex;
      gap: 24px;
      padding: 16px 0;
      overflow: scroll;

      @media (min-width: 720px) {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: center;
        gap: 45px;
      }

      @media (min-width: 1068px) {
        grid-template-columns: repeat(3, auto);
      }

      @media (min-width: 1475px) {
        grid-template-columns: repeat(4, auto);
      }
    }

    > nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin: 100px 0 50px 0;

      div {
        span:first-child {
          color: var(--color-grey-2);
        }

        span {
          font-size: 1.5rem;
          color: var(--color-grey-3);
        }
      }

      > a {
        text-decoration: none;
        font-size: 2rem;
        color: var(--color-brand-2);
      }
    }
  }
`;
