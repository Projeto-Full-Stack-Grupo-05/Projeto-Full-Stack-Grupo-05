import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7px;
  width: 100%;
  border: none;

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 16.94px;

    color: var(--color-grey-0);
  }

  input {
    display: flex;

    border: 2px solid #e9ecef;
    border-radius: 4px;

    padding-left: 15px;
    height: 48px;

    font-weight: 400;
    font-size: 16px;
    color: #868e96;
  }
`;
