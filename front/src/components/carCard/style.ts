import { styled } from "styled-components";

export const CardStyled = styled.div`
  max-width: 312px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  figure {
    width: 312px;

    img {
      width: 100%;
    }
  }
`;

export const InfoStyled = styled.div`
  h6 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-1);
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--color-grey-2);
  }
`;

export const NameBoxStyled = styled.div<{ $colors: string[] }>`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    background-color: ${(props) =>
      props.$colors[Math.floor(Math.random() * props.$colors.length)]};
    color: #ffffff;
    width: 32px;
    height: 32px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--color-grey-2);
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;

  div {
    display: flex;
    gap: 12px;

    p {
      max-width: 60px;
      background-color: var(--color-brand-4);
      color: var(--color-brand-1);
      padding: 8px 4px;
      border-radius: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
