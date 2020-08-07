import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import img from '../../assets/background.png';

import Input from '../../components/Input'
import InputImage from '../../components/InputImage';

import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api-rbac';

interface FormData {
  name: string;
  cpf: string;
  email: string;
  image: string;
  password: string;
}
const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: FormData) => {
    await api.post('users',{
      data,
    })
  }, [])
  return (
    <>
      <div className="container">
        <div id="main">
          <aside id="icon">
            <img src={img} alt="Entrar" />
          </aside>
          <aside id="signup">
            <h1>SIGN UP</h1>
            
            <Form onSubmit={handleSubmit}>
              <label htmlFor="profile-img"/>Imagem de Perfil
              <InputImage name="image" type="file" id="profile-img"/>

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