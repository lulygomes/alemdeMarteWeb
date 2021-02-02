import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globo';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
