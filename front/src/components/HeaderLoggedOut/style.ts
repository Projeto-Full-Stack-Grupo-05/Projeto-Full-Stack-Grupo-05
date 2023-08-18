import styled from "styled-components";

export const StyledFixedHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--color-white-fixed);

  menu {
    display: ${(props) => (props.theme.active ? "flex" : "none")};
    justify-content: space-around;
    align-items: center;
    padding: 12px 0;

    @media (min-width: 620px) {
      display: none;
    }

    a {
      padding: 12px 16px;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 1.75rem;
      text-decoration: none;
      border: 2px solid var(--color-grey-4);
      border-radius: 4px;
      color: var(--color-brand-1);
    }
  }
`;

export const StyledHeaderLoggedOut = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
  z-index: 10;
  border-bottom: 2.3px solid var(--color-grey-6);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 10;

    padding-left: 59px;
    padding-right: 59px;

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

    .loginRegisterDiv {
      display: none;
      align-items: center;
      justify-content: flex-end;

      width: 100%;
      max-width: 320px;
      height: 80px;
      gap: 45px;
      margin-left: 10px;

      border-left: 2.3px solid var(--color-grey-6);

      @media (min-width: 620px) {
        display: flex;
      }

      a {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.75rem;
        padding-left: 40px;
        text-decoration: none;
        color: var(--color-brand-1);
      }

      a:last-child {
        padding: 12px 28px;
        cursor: pointer;

        min-width: 133px;
        height: 48px;

        background: none;
        border: 2.3px solid var(--color-grey-4);
        border-radius: 4px;

        &:hover {
          color: white;
          background-color: black;
          transition: 0.7s;
          border: 2.3px solid black;
        }
      }
    }

    @media (max-width: 592px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
