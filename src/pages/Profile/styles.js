import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 30px 0;

    input {
      font-size: 18px;
      color: #fff;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);

      border: 0;
      border-radius: 4px;

      padding: 0 20px;
      margin-bottom: 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      button {
        height: 42px;
        display: flex;
        align-items: center;
        margin-top: 10px;
        padding: 10px 20px;
        border: 0;
        border-radius: 4px;
        background: #f94d6a;

        span {
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          margin-left: 10px;
        }

        &:hover {
          background-color: ${darken(0.2, '#f94d6a')};
        }
      }
    }
  }
`;
