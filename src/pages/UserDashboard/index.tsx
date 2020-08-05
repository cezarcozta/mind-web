import React from 'react';

import Header from '../../components/Header';

import './styles.css';

const UserDashboard: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div id="main">
          <main>
            <h1>UserDashboard</h1>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;