import React from 'react';

import { useAuth } from '../../hooks/auth';

import { FiPower } from 'react-icons/fi';

import './styles.css';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <>
      <header id="header">
        <aside id="avatar">
          <img src={user.profile_img_url} alt={user.name} />
          <h4>{user.name}</h4>
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