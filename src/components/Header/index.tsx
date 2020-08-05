import React from 'react';

import { FiPower } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <>
      <header id="header">
        <aside id="avatar">
          <img src="https://avatars1.githubusercontent.com/u/6342828?s=400&u=7d7d56e50bd71c80cb478755d1a40016af641a10&v=4" alt="César Augusto Costa" />
        </aside>
        <aside id="icon">
          <FiPower />
        </aside>
      </header>
    </>
  );
};

export default Header;