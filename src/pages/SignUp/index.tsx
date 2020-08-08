import React, { useCallback, useState, useRef } from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input'
import InputImage from '../../components/InputImage';

import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api-rbac';
import { FiLogIn } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

interface FormData {
  name: string;
  cpf: string;
  email: string;
  image: File;
  password: string;
}
const SignUp: React.FC = () => {
const [user, setUser] = useState<FormData>();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async ({ name, cpf, email, image, password }: FormData) => {
    console.log(image);
    const response = await api.post('users',{
      name, cpf, email, image, password
    });

    setUser(response.data);
  }, [])
  return (
    <>
      <div className="container">
        <div id="main">
        <aside id="icon">
            <FiLogIn size={150}/>
          </aside>
          <aside id="signup">
            <h1>SIGN UP</h1>
            
            <Form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="image"/>Imagem de Perfil
              <InputImage name="image" />

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