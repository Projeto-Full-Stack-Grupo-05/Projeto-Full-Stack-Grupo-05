import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  background-color: #f1f3f5;
  position: relative;

  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;

  .blue {
    display: flex;
    position: absolute;
    top: 0;
    width: 100%;
    height: 558px;
    background-color: var(--color-brand-1);
  }

  .MainSection {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    margin-top: 25px;
    gap: 30px;
    z-index: 1;

    @media (max-width: 1163px) {
      flex-direction: column;
      align-items: normal;
    }

    .divOne {
      .imgDiv {
        display: flex;
        justify-content: center;
        width: 750px;
        background-color: #fff;
        padding-top: 60px;
        padding-bottom: 35px;

        border-radius: 4px;

        @media (max-width: 1163px) {
          width: 100%;
        }

        @media (max-width: 570px) {
          img {
            width: 100%;
          }
        }
      }
    }

    .detailsDiv {
      display: flex;
      flex-direction: column;
      width: 750px;
      gap: 20px;
      margin-top: 15px;

      border-radius: 4px;

      background-color: #fff;
      padding: 30px;

      @media (max-width: 1163px) {
        width: 100%;
      }

      h1 {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        margin-top: 25px;
      }

      .priceDiv {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        width: 100%;

        h5 {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
        }

        .yearDiv {
          display: flex;
          gap: 10px;

          .cardDiv {
            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 4px;

            width: 52px;
            height: 32px;
            background-color: var(--color-brand-4);

            h6 {
              font-weight: 500;
              font-size: 14px;
              line-height: 24px;
              color: var(--color-brand-1);
            }
          }
        }
      }
    }

    button {
      width: 100px;
      min-height: 38px;
      border-radius: 4px;
      border: none;
      background-color: var(--color-brand-1);
      color: #fff;
    }
  }

  .asideSection {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1163px) {
      width: 100%;
    }

    .firstDiv {
      width: 100%;
      max-width: 440px;
      background-color: #fff;

      border-radius: 4px;

      padding: 30px;

      @media (max-width: 1163px) {
        width: 100%;
        max-width: 3000px;
      }

      h4 {
        width: 100%;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 30px;

        color: rgba(33, 37, 41, 1);
      }
    }

    .imagesDiv {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media (max-width: 530px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .imageDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;

        height: 108px;
        width: 100%;
        background-color: rgba(233, 236, 239, 1);
      }
    }

    .profileDiv {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 27px;
      gap: 15px;
      width: 100%;
      max-width: 440px;
      background-color: #fff;
      border-radius: 4px;
      padding: 30px;

      @media (max-width: 1163px) {
        width: 100%;
        max-width: 3000px;
      }

      .ball {
        height: 104px;
        width: 104px;
        border-radius: 100%;
        margin-top: 10px;

        background-color: var(--color-brand-1);
      }

      h4 {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;

        color: rgba(33, 37, 41, 1);
      }

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        margin-top: 20px;
        color: rgba(73, 80, 87, 1);
      }

      .ads {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        width: 100%;
        max-width: 206px;
        padding: 12px 28px;
        cursor: pointer;
        height: 48px;

        background: var(--color-grey-0);

        border-radius: 4px;
        text-decoration: none;

        font-weight: 600;
        font-size: 14px;
        color: var(--color-white-fixed);

        &:hover {
          color: var(--color-grey-0);
          color: var(--color-white-fixed);
          transition: 0.7s;
          border: 2.3px solid black;
        }
      }
    }
  }

  .desDiv {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    width: 750px;
    background-color: #fff;

    border-radius: 4px;

    padding: 30px;

    @media (max-width: 1163px) {
      width: 100%;
    }

    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      margin-top: 15px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      margin-top: 33px;
      margin-bottom: 20px;
      color: rgba(73, 80, 87, 1);
    }
  }

  .MainSectionTwo {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;

    @media (max-width: 1163px) {
      margin-top: 30px;
      justify-content: initial;
      flex-direction: column;
    }

    .displayNone {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 440px;

      @media (max-width: 1163px) {
        display: none;
      }
    }

    .divOne {
      .commentsContainerDiv {
        display: flex;
        flex-direction: column;
        margin-top: -15px;

        width: 750px;
        background-color: #fff;
        border-radius: 4px;
        padding: 30px;

        @media (max-width: 1163px) {
          width: 100%;
        }

        h1 {
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          margin-top: 15px;
        }

        .commentsDiv {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 30px;
          margin-top: 15px;

          .commentDiv {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 15px;
            margin-top: 30px;

            .profileDiv {
              display: flex;
              align-items: center;
              gap: 10px;

              .ball {
                width: 20px;
                height: 20px;
                border-radius: 100%;
                background-color: black;
              }

              h5 {
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: rgba(33, 37, 41, 1);
              }

              .miniBall {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: rgba(134, 142, 150, 1);
                margin-top: 2px;
              }

              h6 {
                font-weight: 400;
                font-size: 12px;
                line-height: 24px;
                color: rgba(134, 142, 150, 1);
                margin-top: 3px;
                padding-left: 3px;
              }
            }

            p {
              font-weight: 400;
              font-size: 14px;
              line-height: 24px;
              color: rgba(73, 80, 87, 1);
            }
          }
        }
      }

      .postDiv {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        gap: 15px;
        margin-bottom: 60px;

        width: 100%;
        max-width: 750px;
        background-color: #fff;

        border-radius: 4px;

        padding: 30px;

        @media (max-width: 1163px) {
          width: 100%;
          max-width: 3000px;
        }

        .profileDiv {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;

          .ball {
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background-color: black;
          }

          h5 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: rgba(33, 37, 41, 1);
          }
        }

        .optionsDiv {
          display: flex;
          gap: 5px;

          @media (max-width: 870px) {
            flex-direction: column;
          }

          input {
          }

          .cards {
            display: flex;
            align-items: center;
            height: 24px;
            padding-left: 12px;
            padding-right: 12px;

            border-radius: 24px;
            color: rgba(134, 142, 150, 1);
            background-color: rgba(233, 236, 239, 1);

            font-weight: 500;
            font-size: 12px;
            line-height: 24px;

            cursor: pointer;
          }
        }

        form {
          display: flex;
          position: relative;
          flex-direction: column;
          gap: 15px;

          textarea {
            display: flex;
            height: 140px;
            padding: 20px;

            border-radius: 4px;
            border: solid 1.5px rgba(233, 236, 239, 1);

            font-weight: 400;
            font-size: 16px;
            color: rgba(134, 142, 150, 1);

            resize: none;
          }

          .commentButton {
            position: absolute;
            bottom: 15px;
            right: 15px;
            width: 100px;
            min-height: 38px;
            border-radius: 4px;
            border: none;
            background-color: var(--color-brand-1);
            color: #fff;

            @media (max-width: 870px) {
              position: static;
            }
          }
        }
      }
    }

    .asidePositionDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 440px;

      .positionDiv {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 750px;
        gap: 20px;

        border-radius: 4px;

        background-color: black;
        padding: 30px;
      }

      @media (max-width: 870px) {
        display: none;
      }
    }
  }
`;
