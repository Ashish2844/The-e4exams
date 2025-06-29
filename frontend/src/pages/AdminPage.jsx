import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';

const AdminPage = () => {
  const [centers, setcenters] = useState([]);
  const host = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch(`${host}/api/admin/centers`, {
        credentials: 'include'
      });

      if (res.status === 401 || res.status === 403) {
        navigate('/admin-login');
      } else {
        const data = await res.json();
        setcenters(data);
      }
    };

    checkAuth();
  }, []);

  const deleteCenter = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this center?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${host}/api/admin/centers/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        setcenters(centers.filter(center => center._id !== id));
      } else {
        console.error("Failed to delete center");
      }
    } catch (error) {
      console.error("Error deleting center:", error);
    }
  };

  const handleLogout = async () => {
    await fetch(`${host}/api/admin/logout`, {
      method: "POST",
      credentials: 'include',
    });
    navigate('/admin-login');
  };

  return (
    <div className="admin-container d-flex">
      <AdminSidebar />
      <div className="main-content flex-grow-1" style={{ marginLeft: '0px', width: '100%' }}>
        <AdminNavbar onLogout={handleLogout} />

        <div className="p-4 " style={{marginLeft:'250px'}}>
          <h3 className='text-white fw-bold'>Registered Test Centers</h3>
          <h5 className='text-white'>All Registrations</h5>
          <table className="table table-striped mt-3">
            <thead className='table-secondary'>
              <tr>
                <th>Center Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Type</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {centers.map((center) => (
                <tr key={center._id}>
                  <td>{center.centerName}</td>
                  <td>{center.email}</td>
                  <td>{center.contact}</td>
                  <td>{center.centerType}</td>
                  <td>{new Date(center.availability).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteCenter(center._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

