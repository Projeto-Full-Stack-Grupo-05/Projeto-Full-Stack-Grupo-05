import styled from "styled-components";

export const StyledLRegisterPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;

  justify-content: center;
  align-items: center;
  background-color: #f1f3f5;
  padding: 10px;
`;

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 412px;
  padding-top: 30px;

  background: #fff;
  border-radius: 4px;
  padding: 0 45px;
  margin-top: 52px;
  margin-bottom: 100px;
  gap: 30px;

  h2 {
    width: 100%;

    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    padding-top: 45px;
  }

  h5 {
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  textarea {
    resize: none;
    height: 80px;
    padding: 8px 12px;
    border: 2px solid var(--color-grey-6);
    border-radius: 4px;
  }

  h5 + div {
    display: flex;
    width: 100%;
    height: 48px;
    gap: 10px;

    button:first-child {
      border: none;
      border-radius: 4px;
      height: 48px;
      width: 100%;
      background-color: var(--color-brand-1);

      font-weight: 600;
      font-size: 16px;
      color: #fff;
      margin-bottom: 45px;
    }

    button:last-child {
      border: 2px solid var(--color-brand-1);

      &:hover {
        color: white;
        background-color: black;
        transition: 0.7s;
        border: 2px solid black;
      }
    }
  }

  button:last-child {
    border: none;
    border-radius: 4px;
    height: 48px;
    width: 100%;
    background-color: var(--color-brand-1);

    font-weight: 600;
    font-size: 16px;
    color: #fff;
    margin-bottom: 45px;
  }
`;

export const StyledDivOne = styled.div`
  display: flex;
  gap: 10px;
`;
