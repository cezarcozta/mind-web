import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api-rbac';

interface IAuthState {
  token: string;
  user: User;
  userLevel: number | null;
}

interface ICredentials {
  email?: string;
  cpf?: string;
  password: string;
}

interface Roles {
  level: number;
}

interface User {
  roles: Roles[];
}

interface IAuthContext {
  user: User;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): void;
  useAuth(): IAuthContext;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@api-mind:token');
    const user = localStorage.getItem('@api-mind:user');
    const userLevel = Number(localStorage.getItem('@api-mind:userLevel'));

    if(token && user){
      return {
        token, 
        user: JSON.parse(user),
        userLevel, 
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, cpf, password }) => {
    const response = await api.post('sessions',{
      email, cpf, password,
    });

    const {token, user, userLevel} = response.data;


    localStorage.setItem('@api-mind:token', token);
    localStorage.setItem('@api-mind:user', JSON.stringify(user));
    localStorage.setItem('@api-mind:userLevel', userLevel);

    setData({ token, user, userLevel });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@api-mind:token');
    localStorage.removeItem('@api-mind:user');
    localStorage.removeItem('@api-mind:userLevel');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, useAuth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider }