import React from 'react';
import NavBar from './navbar';
import '../App.css';

function Layout({ children }) {
  return (
    <div className="main-grid">
      <header>
        <NavBar />
      </header>
      <main>
        <div id="modal-root"></div>
        <div className="main-container">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
