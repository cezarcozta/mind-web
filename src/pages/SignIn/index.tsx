import React from 'react';

import img from '../../assets/background.png'

const SignIn: React.FC = () => {
  return (
    <>
      <div className="container">
        <div id="main">
          <aside id="icon">
            <img src={img} alt="Entrar" />
          </aside>
          <aside id="login">
            <h1>SIGN IN</h1>
            
            <label htmlFor="profile-img"/>Imagem de Perfil
            <input id="profile-img" type="file" />

            <input type="text" placeholder="Nome Completo"/>
            <input type="text" placeholder="CPF"/>

            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Senha"/>

            <button type="button">Cadastrar</button>
          </aside>
        </div>
      </div>
    </>   
  );
};

export default SignIn;