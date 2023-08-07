import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 59px;
  padding-left: 59px;
  padding-top: 45px;
  padding-bottom: 45px;

  height: 140px;

  background-color: var(--color-grey-scale-grey-0);

  h4 {
    font-weight: 400;
    font-size: 1.35rem;
    line-height: 0.875rem;
    color: var(--color-colors-fixed-white-fixed);
  }

  .square {
    display: flex;
    border: solid 0.0625rem var(--color-grey-scale-grey-0);
    background-color: var(--color-grey-scale-grey-1);
    border-radius: 4px;
    padding: 1.3rem;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    height: 310px;
  }
`;
