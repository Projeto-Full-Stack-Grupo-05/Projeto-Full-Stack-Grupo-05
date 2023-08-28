import { styled } from "styled-components";

export const BurguerMenu = styled.div`
  position: absolute;
  width: 200px;
  top: 80px;
  right: 180px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-white-fixed);
  padding: 20px;

  p {
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.4rem;
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    button {
      padding: 12px 20px;
      width: 100%;
      max-width: 150px;
      border: none;
      max-height: 48px;
      height: 100%;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .btn-cancel {
      color: var(--color-grey-2);
      background-color: var(--color-grey-6);
    }

    .btn-exclude {
      color: var(--color-alert-1);
      background-color: var(--color-alert-2);
    }

    .btn-save {
      color: var(--color-white-fixed);
      background-color: var(--color-brand-1);
    }

    .flex-end {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    div {
      display: flex;
      gap: 10px
    }

    fieldset {
      display: flex;
      flex-direction: column;
      gap: 8px;
      border: none;
      max-width: 466px;
      width: 100%;

      label {
        font-size: 1.4rem;
        font-weight: 500;
      }

      input {
        padding: 12px;
        border-radius: 4px;
        border: 1.5px solid var(--color-grey-7);
      }
    }
  }
`

export const DivFormInLine = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`