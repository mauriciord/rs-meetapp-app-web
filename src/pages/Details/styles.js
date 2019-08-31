import styled from 'styled-components';
import { darken } from 'polished';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  header {
    margin-top: 10px;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      color: #fff;
      font-size: 32px;
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Button = styled.button`
  height: 42px;
  border: 0;
  border-radius: 4px;
  padding: 10px 20px;

  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
  }
`;

export const BtnCancel = styled(Button)`
  background-color: #f94d6a;

  &:hover {
    background-color: ${darken(0.1, '#f94d6a')};
  }
`;

export const BtnEdit = styled(Link)`
  height: 42px;
  border: 0;
  border-radius: 4px;
  padding: 10px 20px;

  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
  }
  background-color: #3b9eff;
  margin-right: 15px;

  &:hover {
    background-color: ${darken(0.1, '#3b9eff')};
  }
`;

export const Banner = styled.img`
  margin-top: 10px;
  height: 300px;
  background-size: cover;
`;

export const Description = styled.p`
  margin: 20px 0;
  color: #fff;
  font-size: 18px;
  line-height: 1.6;
  font-weight: regular;
`;

export const Date = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 40px;

  span {
    margin-left: 10px;
  }
`;

export const Location = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);

  span {
    margin-left: 10px;
  }
`;
