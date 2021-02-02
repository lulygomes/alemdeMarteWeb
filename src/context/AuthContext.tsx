/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import { localApi } from '../services/api';

interface UserData {
  id: string;
  name: string;
}

interface AuthState {
  token: string;
  user: UserData;
}

interface SignInData {
  name: string;
}

interface AuthContextData {
  user: UserData;
  signIn(credentials: SignInData): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AlemDeMarte:token');
    const user = localStorage.getItem('@AlemDeMarte:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ name }) => {
    const response = await localApi.post(`user/${name}`);

    const { user, token } = response.data;

    localStorage.setItem('@AlemDeMarte:token', token);
    localStorage.setItem('@AlemDeMarte:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AlemDeMarte:token');
    localStorage.removeItem('@AlemDeMarte:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
