import React from 'react';

import { useAuth } from '../../context/AuthContext';

import { Container, Header, Content, Card } from './styles';

const LandPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <h1>Olá {user.name}</h1>
      </Header>

      <Content>
        <Card>cartão</Card>
      </Content>
    </Container>
  );
};

export default LandPage;
