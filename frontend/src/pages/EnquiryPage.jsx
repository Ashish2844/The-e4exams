import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';

const EnquiryPage = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_URL = import.meta.env.VITE_API_URL;

    // Fetch all enquiries
    const fetchEnquiries = async () => {
        try {
            const res = await fetch(`${API_URL}/api/admin/enquiries`, {
                credentials: 'include'
            });

            const data = await res.json();
            setEnquiries(data);
        } catch (err) {
            console.error("Failed to fetch enquiries:", err);
        } finally {
            setLoading(false);
        }
    };

    // Delete an enquiry
    const deleteEnquiry = async (id) => {
        if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

        try {
            const res = await fetch(`${API_URL}/api/admin/enquiries/${id}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            if (res.ok) {
                setEnquiries(enquiries.filter((item) => item._id !== id));
                alert("Deleted successfully");
            } else {
                alert("Failed to delete");
            }
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const handleLogout = async () => {
        await fetch(`${API_URL}/api/admin/logout`, {
            method: "POST",
            credentials: 'include',
        });
        window.location.href = "/admin-login";
    };

    return (
        <div className="admin-container d-flex">
            <AdminSidebar />
            <div className="main-content flex-grow-1" style={{ marginLeft: '0px', width: '100%' }}>
                <AdminNavbar onLogout={handleLogout} />

                <div className="p-4" style={{marginLeft:'250px'}}>
                    <h2 className="text-white mb-4">Enquiries</h2>

                    {loading ? (
                        <p className="text-white">Loading enquiries...</p>
                    ) : enquiries.length === 0 ? (
                        <p className="text-white">No enquiries found.</p>
                    ) : (
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiries.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.firstName} {item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.number}</td>
                                        <td>{item.message}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => deleteEnquiry(item._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    <Link to="/admin" className="btn btn-primary mt-3">Back</Link>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPage;
