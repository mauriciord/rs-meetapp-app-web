import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  header {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      color: #fff;
      font-size: 32px;
    }
  }

  p {
    color: #fff;
  }
`;

export const Meetup = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 62px;
  padding: 30px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  strong {
    color: #fff;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      margin-right: 30px;
    }

    a {
      color: #fff;
      display: flex;
      align-items: center;
    }
  }
`;

export const BtnNew = styled(Link)`
  border: 0;
  border-radius: 4px;
  background-color: #f94d6a;
  padding: 10px 20px;

  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
  }

  &:hover {
    background-color: ${lighten(0.1, '#f94d6a')};
  }
`;
