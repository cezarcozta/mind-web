import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input'

import './styles.css'

interface IFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: IFormData) => {
    signIn({
      email: data.email,
      password: data.password,
    });
  }, [signIn]);
  
  return (
    <>
      <div className="container">
        <div id="main">
          <aside id="signin">
            <h1>SIGN IN</h1>

            <Form onSubmit={handleSubmit}>
              <Input name="email" type="text" placeholder="CPF ou E-mail"/>
              <Input name="password" type="text" placeholder="Senha"/>

              <button type="submit">Entrar</button>
            </Form>
            
            <Link to="/signup">Cadastrar</Link>
          </aside>
          <aside id="icon">
            <FiLogIn size={150}/>
          </aside>
        </div>
      </div>
    </>  
  );
};

export default SignIn;