import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ height: '100vh', width: '250px', position: 'fixed' }}>
      <h4>Admin Panel</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <Link to="/admin" className="nav-link text-white">🏠 Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/latest-registration" className="nav-link text-white">🕒 Latest Registration</Link>
        </li>
        <li className="nav-item">
          <Link to="/deleted-registrations" className="nav-link text-white">🗑️ Deleted Registrations</Link>
        </li>
        <li className="nav-item">
          <Link to="/enquiry" className="nav-link text-white">📨 Enquiry Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
