import styled from "styled-components";

export const StyledFixedHeader = styled.div`
  width: 100%;
  position: fixed;
  background-color: var(--color-white-fixed);
`;

export const StyledHeaderLoggedOut = styled.header`
  display: flex;
  width: 100%;
  /* position: fixed; */
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

    .loginRegisterDiv {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 100%;
      max-width: 320px;
      height: 80px;
      gap: 45px;
      margin-left: 10px;

      border-left: 2.3px solid var(--color-grey-6);

      h3 {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.75rem;
        padding-left: 40px;

        a {
          text-decoration: none;
          color: var(--color-brand-1);
        }
      }

      .RegisterButton {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;

        min-width: 133px;
        height: 48px;

        background: none;
        border: 2.3px solid var(--color-grey-4);
        border-radius: 4px;

        font-weight: 600;
        font-size: 1.6rem;
        line-height: 1.75rem;

        a {
          text-decoration: none;
          color: var(--color-grey-0);
        }

        &:hover {
          a {
            color: white;
          }
          background-color: black;
          color: white;
          transition: 0.7s;
          border: none;
        }
      }
    }

    @media (max-width: 592px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;
