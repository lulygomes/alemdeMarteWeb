import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import { Container } from './styles';

const Welcome: React.FC = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(() => {
    signIn({ name });

    history.push('/landpage');
  }, [history, name, signIn]);

  return (
    <Container>
      <h1>Seja bem vindo</h1>

      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="button" onClick={handleSubmit}>
        Entrar
      </button>
    </Container>
  );
};

export default Welcome;
