import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 59px;
  padding-left: 59px;
  padding-top: 45px;
  padding-bottom: 45px;

  height: 80px;
  width: 100%;

  background-color: var(--color-grey-0);

  h4 {
    font-weight: 400;
    font-size: 1.35rem;
    line-height: 0.875rem;
    color: var(--color-white-fixed);
  }

  .square {
    display: flex;
    border: solid 0.0625rem var(--color-grey-0);
    background-color: var(--color-grey-1);
    border-radius: 4px;
    padding: 1.3rem;
  }

  @media (max-width: 592px) {
    flex-direction: column;
    height: 280px;

    h4 {
      font-size: 1.15rem;
    }
  }
`;
