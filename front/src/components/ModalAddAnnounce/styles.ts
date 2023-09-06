import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  h2 {
    font-size: 16px;
    color: var(--color-grey-1);
  }
  p {
    font-size: 18px;
    color: var(--color-grey-3);
    cursor: pointer;
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-right: 20px;
  max-height: 90vh;

  h3 {
    font-size: 14px;
    margin-bottom: 10px;
  }
  label {
    font-size: 14px;
    margin-bottom: 5px;
  }
  select {
    color: var(--color-grey-3);
    border-color: var(--color-grey-3);
    border-radius: 4px;
    min-height: 48px;
    margin-bottom: 5px;
    padding-left: 5px;
  }
  div {
    display: flex;
    flex-direction: row-reverse;
    div {
      display: flex;
      flex-direction: column;
      input {
        margin-right: 10px;
        width: 95%;
        color: var(--color-grey-3);
        border: 1px solid;
        border-color: var(--color-grey-3);
        border-radius: 4px;
        min-height: 48px;
        margin-bottom: 5px;
        padding-left: 5px;
      }
    }
  }
  input {
    margin-right: 10px;
    width: 95%;
    color: var(--color-grey-3);
    border: 1px solid;
    border-color: var(--color-grey-3);
    border-radius: 4px;
    min-height: 48px;
    margin-bottom: 5px;
    padding-left: 5px;
  }
`;
export const DivButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
`;
export const ButtonAddImg = styled.button`
  width: 80%;
  margin-top: 15px;
  background-color: var(--color-brand-4);
  min-height: 38px;
  color: var(--color-brand-1);
  font-weight: bold;
  font-size: 12px;
  border: none;
  border-radius: 4px;
`;

export const ButtonSubmit = styled.button`
  margin-top: 20px;
  background-color: var(--color-brand-3);
  color: var(--color-grey-10);
  min-height: 48px;
  width: 40%;
  border: none;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonCancel = styled.button`
  margin-top: 20px;
  background-color: var(--color-grey-4);
  color: var(--color-grey-2);
  min-height: 48px;
  width: 30%;
  border: none;
  font-size: 16px;
  font-weight: bold;
`;
