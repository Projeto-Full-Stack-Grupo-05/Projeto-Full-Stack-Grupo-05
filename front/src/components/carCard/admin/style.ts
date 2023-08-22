import { styled } from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 356px;
  min-width: 312px;
  width: 312px;

  figure {
    position: relative;
    display: flex;
    align-items: center;
    height: 152px;
    overflow: hidden;

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
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, max-content) auto;
    align-items: center;
    gap: 12px;
    margin-top: 16px;

    span {
      padding: 8px;
      max-width: 80px;
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
      max-width: 150px;
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
