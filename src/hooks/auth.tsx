import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api-rbac';

interface Roles {
  id: string;
  name: string;
  level: number;
  description: string;
}

interface IUser {
  id: string;
  name: string;
  image: File,
  profile_image: string;
  profile_img_url: string;
  email: string;
  cpf: string;
  roles: Roles[];
}

interface IAuthState {
  token: string;
  user: IUser;
  level: string;
}

interface ICredentials {
  email?: string;
  cpf?: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  level: string;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): void;
  useAuth(): IAuthContext;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@api-mind:token');
    const user = localStorage.getItem('@api-mind:user');
    const level = localStorage.getItem('@api-mind:level');

    if(token && user && level){
      return {
        token, 
        user: JSON.parse(user),
        level,
      };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, cpf, password }) => {
    const response = await api.post('sessions', {
      email, cpf, password,
    });

    const { token, user } = response.data;

    const level = user.roles.map((role: any) => role.level);

    localStorage.setItem('@api-mind:token', token);
    localStorage.setItem('@api-mind:user', JSON.stringify(user));
    localStorage.setItem('@api-mind:level', String(level))

    setData({ token, user, level });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@api-mind:token');
    localStorage.removeItem('@api-mind:user');
    localStorage.removeItem('@api-mind:level');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, level: data.level, signIn, useAuth, signOut }}>
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