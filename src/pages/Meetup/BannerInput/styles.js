import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      max-width: 900px;
      height: auto;
      border-radius: 4px;
      border: 2px solid rgba(249, 77, 106, 0.8);
      background: #22202c;
    }
    input {
      display: none;
    }
  }
`;
