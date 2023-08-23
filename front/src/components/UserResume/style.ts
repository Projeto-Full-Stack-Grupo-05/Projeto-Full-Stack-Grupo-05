import { styled } from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 75px 16px;
  background: linear-gradient(
    180deg,
    var(--color-brand-1) 50%,
    var(--color-grey-8) 50%
  );

  > div {
    padding: 40px 28px;
    max-width: 1240px;
    border-radius: 8px;
    background-color: var(--color-grey-10);

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background-color: var(--color-brand-1);

      h3 {
        display: inline;
        color: var(--color-white-fixed);
      }
    }

    > h6 {
      display: inline;
    }

    > span {
      margin-left: 10px;
      padding: 4px 8px;
      color: var(--color-brand-1);
      border-radius: 4px;
      background-color: var(--color-brand-4);
    }

    > p {
      margin-top: 20px;
      color: var(--color-grey-2);
    }

    > button {
      margin-top: 20px;
      padding: 12px 28px;
      color: var(--color-brand-1);
      border: 2px solid var(--color-brand-1);
      background-color: transparent;

      @media (min-width: 720px) {
        margin-top: 38px;
      }
    }
  }
`;
