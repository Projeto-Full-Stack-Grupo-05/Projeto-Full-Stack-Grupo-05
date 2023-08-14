import styled from "styled-components";

export const StyledFixedHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: sticky;
  top: 0;

  > menu {
    display: ${(props) => (props.theme.active ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    background-color: white;

    @media (min-width: 620px) {
      display: none;
    }

    .circle {
      border: 1px solid black;
      border-radius: 100%;
      width: 30px;
      height: 30px;
      background-color: black;
    }
  }
`;

export const StyledHeaderLoggedIn = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  border-bottom: 2.3px solid var(--color-grey-6);
  background-color: var(--color-white-fixed);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    padding: 0 16px;
    width: 100%;

    @media (min-width: 620px) {
      padding: 0 59px;
    }

    > button {
      height: 46px;
      width: 46px;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background: none;

      @media (min-width: 620px) {
        display: none;
      }

      > svg {
        height: 100%;
        width: 100%;
      }
    }

    > div {
      display: none;
      align-items: center;
      justify-content: flex-end;

      width: 100%;
      max-width: 190px;
      height: 80px;
      gap: 10px;

      border-left: 2.3px solid var(--color-grey-6);

      @media (min-width: 620px) {
        display: flex;
      }

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
