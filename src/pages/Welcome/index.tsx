import React from 'react';

import { Container } from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <h1>Seja bem vindo</h1>
      <input type="text" />
      <button type="button">Entrar</button>
    </Container>
  );
};

export default Welcome;
