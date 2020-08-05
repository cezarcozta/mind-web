import React from 'react';

import Header from '../../components/Header';

import './styles.css';

const AdminDashboard: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div id="main">
          <main>
            <h1>AdminDashboard</h1>
          </main>
        </div>
      </div>
    </>
    
  );
};

export default AdminDashboard;