import React from 'react';
import { Form } from '@unform/web';

import img from '../../assets/background.png';

import Input from '../../components/Input'

import './styles.css';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <>
      <div className="container">
        <div id="main">
          <aside id="icon">
            <img src={img} alt="Entrar" />
          </aside>
          <aside id="signup">
            <h1>SIGN UP</h1>
            
            <Form onSubmit={() => {}}>
              <label htmlFor="profile-img"/>Imagem de Perfil
              <Input name="image" type="file" id="profile-img"/>

              <Input name="name" type="text" placeholder="Nome Completo"/>
              <Input name ="cpf" type="text" placeholder="CPF"/>

              <Input name="email" type="text" placeholder="Email"/>
              <Input name="password" type="text" placeholder="Senha"/>

              <button type="submit">Cadastrar</button>
            </Form>

            <Link to="/">Voltar</Link>
          </aside>
        </div>
      </div>
    </>   
  );
};

export default SignUp;