import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
  background: #000;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  height: 92px;
  margin: 0 auto;

  img {
    width: 32px;
    height: 32px;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 30px;
    line-height: 1.4;

    strong {
      color: #fff;
      display: block;
    }

    a {
      color: #999;
      font-size: 14px;
      margin-top: 2px;
      display: block;
    }
  }

  button {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    background-color: #d44059;
    padding: 10px 20px;

    &:hover {
      background-color: ${darken(0.1, '#d44059')};
    }
  }
`;
