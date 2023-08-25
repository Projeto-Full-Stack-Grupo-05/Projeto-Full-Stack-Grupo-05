import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;

  justify-content: center;
  align-items: center;
  background-color: #f1f3f5;
  padding: 10px;
`;

export const StyledLoginForm = styled.form`
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

  h2 {
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    padding-top: 45px;
  }

  fieldset {
    margin-top: 32px;
  }

  fieldset + .btnResetPassword {
    align-self: flex-end;
    border: none;
    margin-top: 12px;
    width: 150px;
    height: max-content;
    background-color: transparent;
    text-decoration: none;

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #495057;
  }

  button {
    border: none;
    border-radius: 4px;
    margin-top: 24px;
    height: 48px;
    width: 100%;
    background-color: var(--color-brand-1);

    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 20px 0;
  }

  .register {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-bottom: 44px;
    padding: 12px 28px;
    cursor: pointer;
    height: 48px;

    background: none;
    border: 2.3px solid var(--color-grey-4);
    border-radius: 4px;
    text-decoration: none;

    font-weight: 600;
    font-size: 16px;
    color: var(--color-grey-0);

    &:hover {
      color: white;
      background-color: black;
      transition: 0.7s;
      border: 2.3px solid black;
    }
  }
`;
