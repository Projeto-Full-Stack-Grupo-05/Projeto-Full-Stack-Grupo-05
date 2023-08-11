import styled from "styled-components";

export const StyledFixedHeader = styled.div`
  width: 100%;
  position: fixed;
  background-color: var(--color-white-fixed);
`;

export const StyledHeaderLoggedIn = styled.header`
  display: flex;
  position: fixed;
  height: 80px;
  width: 100%;
  border-bottom: 2.3px solid var(--color-grey-6);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    width: 100%;

    padding-left: 59px;
    padding-right: 59px;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 100%;
      max-width: 190px;
      height: 80px;
      gap: 10px;

      border-left: 2.3px solid var(--color-grey-6);

      .circle {
        border: 1px solid black;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        background-color: black;
      }

      h3 {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.75rem;
        color: var(--color-grey-2);
      }
    }
  }
`;
