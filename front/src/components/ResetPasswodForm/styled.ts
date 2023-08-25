import { styled } from "styled-components";

export const DivContainer = styled.div`
  background-color: var(--color-white-fixed);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 400px;
  height: 400px;
  border-radius: 6px;
  padding: 0 40px;
  gap: 20px;

  h2 {
    width: 100%;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }

  span {
    font-size: 1.5rem;

    > a {
      text-decoration: none;
    }
  }
`;
export const FormContainer = styled.form`
  display: flex;
  gap: 25px;
  flex-direction: column;
  height: 60%;
  width: 100%;
  justify-content: center;

  label {
    font-weight: 500;
    font-size: 13px;
    color: var(--color-grey-0);
  }

  input {
    display: flex;
    width: 100%;

    border: 2px solid #e9ecef;
    border-radius: 4px;
    padding: 0 15px;
    height: 48px;

    font-weight: 400;
    font-size: 16px;
    color: #868e96;
  }

  button {
    border: none;
    border-radius: 4px;
    height: 48px;
    width: 100%;
    background-color: var(--color-brand-1);

    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
`;
