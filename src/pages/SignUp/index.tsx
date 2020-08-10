import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input'
import InputImage from '../../components/InputImage';

import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api-rbac';
import { FiLogIn } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import Select from '../../components/Select';

interface FormData {
  name: string;
  cpf: string;
  email: string;
  image: File;
  password: string;
  roles: string;
}

interface Roles {
  id: string;
  name: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const [roles, setRoles] = useState<Roles[]>([]); 

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (formData: FormData) => {
    const { name, email, image, cpf, password, roles } = formData;

    const data = new FormData();

    data.append('name', name);
    data.append('image', image);
    data.append('email', email);
    data.append('cpf',cpf);
    data.append('password', password);
    data.append('roles', roles);

    await api.post('users', data);

    history.push('/');
  }, [history]);

  useEffect(() => {
    async function loadRoles(): Promise<void> {
      const response = await api.get('/roles');

      setRoles(response.data);
    }

    loadRoles();
  },[]);
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

              <Select name="roles">
                <option value="0">Selecione o papel do usuário</option>
                {roles && roles.map(role => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </Select>

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