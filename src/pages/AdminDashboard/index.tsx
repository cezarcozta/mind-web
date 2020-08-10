import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import './styles.css';
import { FiUser, FiGrid, FiMail, FiSettings, FiToggleLeft } from 'react-icons/fi';

import api from '../../services/api-rbac';

interface User{
  id: string;
  name: string;
  profile_img_url: string;
  cpf: string;
  email: string;
}

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      
      setUsers(response.data);
    }

    loadUsers();
  }, []);
 
  return (
    <>
      <div className="container">
        <Header />
        <div id="admin-main">
          <main id="admin-content">
            {users.map(user => (
              <div key={user.id}>
                <img src={user.profile_img_url} alt={String(user.name)} />
                
                <ul>
                  <li><FiUser size={35} />{user.name}</li>
                  <li><FiGrid size={35} />{user.cpf}</li>
                  <li><FiMail size={35} />{user.email}</li>
                </ul>

                <button>
                  <FiSettings size={25} />
                  Editar
                </button>
                <button>
                  <FiToggleLeft size={25} />
                  Desativar
                </button>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
    
  );
};

export default AdminDashboard;