import { styled } from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  margin-left: 12px;
  max-width: 290px;
  margin-bottom: 10px;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    color: var(--color-grey-3);
  }

  input {
    color: var(--color-grey-3);
    border: transparent;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-left: 12px;
    max-width: 297px;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  @media (max-width: 320px) {
    max-width: 270px;
  }
`;

export const DivInput = styled.div`
  height: 3px;
  width: 275px;
  position: relative;
  background: #9747ff;
  border-radius: 5px;
  margin-left: 15px;
  input {
    position: absolute;
    width: 100%;
    height: 5px;
    top: -1px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #9747ff;
    pointer-events: auto;
    -webkit-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  }
  input[type="range"]::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border: none;
    border-radius: 50%;
    background: #9747ff;
    pointer-events: auto;
    -moz-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  }

  div {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 320px) {
    max-width: 240px;
  }
`;
