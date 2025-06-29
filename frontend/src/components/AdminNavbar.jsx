// src/components/AdminNavbar.jsx
import React from 'react';

const AdminNavbar = ({ onLogout }) => {
  return (
    <div
      className="top-navbar bg-light shadow-sm d-flex justify-content-between align-items-center px-4 py-2"
      style={{ marginLeft: '250px' }}
    >
      <h5 className="mb-0 fw-bold fs-2">Admin Dashboard</h5>
      <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminNavbar;
