import React from 'react';

import img from '../../assets/background.png'

import './styles.css'

const Login: React.FC = () => {
  return (
    <>
      <div className="container">
        <div id="main">
          <aside id="login">
            <h1>LOGIN</h1>

            <input type="text" placeholder="CPF ou E-mail"/>
            <input type="text" placeholder="Senha"/>

            <button type="button">Entrar</button>

            <a href="#/">Cadastrar</a>
          </aside>
          <aside id="icon">
            <img src={img} alt="Entrar" />
          </aside>
        </div>
      </div>
    </>  
  );
};

export default Login;