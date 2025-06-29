import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';

const DeletedRegistrations = () => {
    const [deletedRegs, setDeletedRegs] = useState([]);
    const [loading, setLoading] = useState(true);
    const host = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchDeletedRegistrations = async () => {
            try {
                const res = await fetch(`${host}/api/admin/deleted-registrations`, {
                    credentials: 'include',
                });

                if (res.ok) {
                    const data = await res.json();
                    setDeletedRegs(data);
                } else {
                    console.error('Failed to fetch deleted registrations');
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDeletedRegistrations();
    }, []);

    const handleLogout = async () => {
        await fetch(`${host}/api/admin/logout`, {
            method: "POST",
            credentials: 'include',
        });
        window.location.href = "/admin-login";
    };

    const handlePermanentDelete = async (id) => {
        if (!window.confirm("Are you sure you want to permanently delete this registration? This action cannot be undone.")) return;

        try {
            const res = await fetch(`${host}/api/admin/permanent-delete/${id}`, {
                method: "DELETE",
                credentials: 'include',
            });

            if (res.ok) {
                setDeletedRegs(deletedRegs.filter(reg => reg._id !== id));
                alert("Registration permanently deleted.");
            } else {
                alert("Failed to delete permanently.");
            }
        } catch (err) {
            console.error("Permanent delete error:", err);
        }
    };


    return (
        <div className="admin-container d-flex">
            <AdminSidebar />
            <div className="main-content flex-grow-1" style={{ marginLeft: '0px', width: '100%' }}>
                <AdminNavbar onLogout={handleLogout} />
                <div className="p-4" style={{ marginLeft: '250px' }}>
                    <h3 className="mb-4 text-white">Deleted Registrations</h3>

                    {loading ? (
                        <div className="text-white">Loading deleted registrations...</div>
                    ) : deletedRegs.length === 0 ? (
                        <div className="text-white">No deleted registrations found.</div>
                    ) : (
                        <table className="table table-bordered table-hover">
                            <thead className="table-secondary">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Deleted At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deletedRegs.map((reg) => (
                                    <tr key={reg._id}>
                                        <td>{reg.centerName}</td>
                                        <td>{reg.email}</td>
                                        <td>{reg.contact}</td>
                                        <td>{new Date(reg.deletedAt).toLocaleString()}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handlePermanentDelete(reg._id)}
                                            >
                                                Delete Permanently
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

export default DeletedRegistrations;
