import React from 'react';

import { useAuth } from '../../hooks/auth';

import { FiPower } from 'react-icons/fi';

import './styles.css';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <header id="header">
        <aside id="avatar">
          <img src="https://avatars1.githubusercontent.com/u/6342828?s=400&u=7d7d56e50bd71c80cb478755d1a40016af641a10&v=4" alt="César Augusto Costa" />
        </aside>
        <aside id="icon">
          <button onClick={signOut}>
            <FiPower />
          </button>
        </aside>
      </header>
    </>
  );
};

export default Header;