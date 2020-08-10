import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import { FiUser, FiMail, FiSettings, FiGrid } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api-rbac';

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
  //onst [userCurrent, setUserCurrent] = useState<IUser>();
  const { user } = useAuth();

  // useEffect(() => {
  //   async function loadUser(): Promise<void>{
  //     const response = await api.get(`/users/${user.id}`);

  //     setUserCurrent(response.data);
  //   }

  //   loadUser();
  // }, [user.id]);

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
            <button>
              <FiSettings size={35} />
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;