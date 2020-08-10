import React from 'react';

import Header from '../../components/Header';

import { FiUser, FiMail, FiSettings, FiGrid } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import './styles.css';

interface IUser {
  id: string;
  name: string;
  image: File,
  profile_img_url: string;
  email: string;
  cpf: string;
  Roles: {
    level: number;
  }
}

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="container">
        <Header />
        <div id="mainContent">
          <header>
            <img 
              src={user.profile_img_url}
              alt={user.name} 
            />
          </header>
          <main id="content">
            <ul>
              <li><FiUser size={35} />{user.name}</li>
              <li><FiGrid size={35} />{user.cpf}</li>
              <li><FiMail size={35} />{user.email}</li>
            </ul>
          </main>
          <footer>
            <button type="button">
              <FiSettings size={35} />Editar
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;