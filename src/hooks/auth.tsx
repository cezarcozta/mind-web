import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api-rbac';

interface IAuthState {
  token: string;
  user: User;
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
  verfyRole(): number;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@api-mind:token');
    const user = localStorage.getItem('@api-mind:user');

    if(token && user){
      return {
        token, 
        user: JSON.parse(user) 
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, cpf, password }) => {
    const response = await api.post('sessions',{
      email, cpf, password,
    });

    const {token, user} = response.data;

    localStorage.setItem('@api-mind:token', token);
    localStorage.setItem('@api-mind:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@api-mind:token');
    localStorage.removeItem('@api-mind:user');

    setData({} as IAuthState);
  }, []);

  const verfyRole = useCallback(() => {
    const { user } = data;

    const level = user.roles.map(role => role.level);

    return level[0];
  },[data])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, useAuth, signOut, verfyRole }}>
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