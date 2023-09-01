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
  max-height: 90vh;
  gap: 15px;

  h3 {
    font-size: 14px;
  }
  label {
    font-size: 14px;
  }
  select {
    color: var(--color-grey-3);
    border-color: var(--color-grey-3);
    border-radius: 4px;
    min-height: 48px;

    padding-left: 5px;
  }
  div {
    width: 100%;
    display: flex;
    gap: 10px;
    div {
      display: flex;
      flex-direction: column;
      input {
        width: 100%;
        color: var(--color-grey-3);
        border: 1px solid;
        border-color: var(--color-grey-3);
        border-radius: 4px;
        min-height: 48px;
        padding-left: 5px;
      }
    }
  }
  input {
    width: 100%;
    color: var(--color-grey-3);
    border: 1px solid;
    border-color: var(--color-grey-3);
    border-radius: 4px;
    min-height: 48px;
    padding-left: 5px;
  }
`;

export const ButtonAddImg = styled.button`
  width: 70%;
  margin-top: 15px;
  background-color: var(--color-brand-4) !important;
  padding: 10px 20px !important;
  min-height: 38px;
  color: var(--color-brand-1);
  font-weight: bold !important;
  font-size: 1.4rem !important;
  border: none !important;
  border-radius: 4px !important;
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 10px;
  width: 100% !important;
`;

export const ButtonSave = styled.button`
  margin-top: 20px;
  background-color: var(--color-brand-3) !important;
  color: var(--color-grey-10);
  min-height: 48px;
  width: 45%;
  border: none !important;
  font-size: 16px !important;
  font-weight: 600 !important;
`;

export const ButtonExcluir = styled.button`
  margin-top: 20px;
  background-color: var(--color-grey-5) !important;
  color: var(--color-grey-2);
  min-height: 48px;
  width: 55%;
  border: none !important;
  font-size: 16px !important;
  font-weight: 600 !important;
`;
