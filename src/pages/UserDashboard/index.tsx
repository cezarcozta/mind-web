import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import { FiUser, FiMail } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api-rbac';

import './styles.css';

interface IRequest {
  name: string;
}

const UserDashboard: React.FC = () => {
  const [userCurrent, setUserCurrent] = useState<IRequest>();
  const { user } = useAuth();

  useEffect(() => {
    async function loadUser(): Promise<void>{
      const response = await api.get('/users/:id');

      setUserCurrent(response.data);
    }

    loadUser();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <div id="main">
          <header>
            <img 
              src="https://avatars1.githubusercontent.com/u/6342828?s=400&u=7d7d56e50bd71c80cb478755d1a40016af641a10&v=4" 
              alt={String(user)} 
            />
          </header>
          <main id="content">
            <FiUser />César Augusto Costa
            <FiUser />364.522.718-90
            <FiUser />
            <FiMail />cezarcozta@gmai.com
          </main>
          <footer>

          </footer>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;