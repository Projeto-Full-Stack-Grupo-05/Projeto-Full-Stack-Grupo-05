import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .bannerDiv {
    display: flex;
    height: 544px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    background-image: url("src/assets/car banner.svg");

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--color-grey-10);
      gap: 20px;
      padding-bottom: 40px;

      h1 {
        font-weight: 600;
        font-size: 46px;
        line-height: 45px;
      }
    }

    .slogan {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 36px;
      text-align: center;
      line-height: 45px;
    }
  }

  .mainDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-bottom: 25px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .nextDiv {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-bottom: 120px;

    width: 100%;

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
