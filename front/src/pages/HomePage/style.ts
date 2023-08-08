import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .carBanner {
    width: fit-content;
  }

  .mainDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 25px;
  }

  .nextDiv {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-bottom: 120px;

    button {
      border: none;
      background: none;
      color: var(--color-brand-2);

      font-weight: 600;
      font-size: 3rem;
      line-height: 0.875rem;
    }
  }
`;
