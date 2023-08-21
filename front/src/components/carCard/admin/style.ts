import { styled } from "styled-components";

export const Card = styled.li`
  height: 356px;
  width: 312px;

  figure {
    position: relative;

    > img {
      width: 100%;
    }

    > span {
      position: absolute;
      top: 5px;
      left: 5px;
      padding: 4px 8px;
      color: var(--color-white-fixed);
      background-color: var(--color-brand-1);
    }
  }

  h6 {
    margin-top: 16px;
    font-size: 1rem;
  }

  p {
    margin-top: 16px;
    font-size: 0.875rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, max-content) auto;
    align-items: center;
    gap: 12px;
    margin-top: 16px;

    span {
      width: max-content;
      max-width: 80px;
      padding: 8px;
      color: var(--color-brand-1);
      font-size: 0.875rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-radius: 4px;
      background-color: var(--color-brand-4);
    }

    span:last-child {
      justify-self: flex-end;
      max-width: 120px;
      color: var(--color-grey-1);
      font-weight: 500;
      background-color: transparent;
    }
  }

  > div:last-child {
    gap: 16px;

    button {
      padding: 12px 20px;
      font-weight: 600;
      font-size: 1rem;
      border-radius: 4px;
      border: 2px solid var(--color-grey-1);
      background-color: transparent;
    }

    button:hover {
      transition: 0.3s;
      color: var(--color-white-fixed);
      background-color: var(--color-grey-1);
    }
  }
`;
