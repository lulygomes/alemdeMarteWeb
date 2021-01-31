import styled from 'styled-components';

export const Container = styled.main`
  background: #f5f5f5;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 48px;
  }

  input {
    margin-bottom: 32px;
  }

  button {
    background: #8b00ff;
    padding: 8px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
`;
