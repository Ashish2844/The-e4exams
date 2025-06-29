import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';

const LatestRegistrations = () => {
    const [latestList, setLatestList] = useState([]);
    const [loading, setLoading] = useState(true);
    const host = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchLatestList = async () => {
            try {
                const res = await fetch(`${host}/api/admin/latest-registration`, {
                    credentials: 'include',
                });

                if (res.ok) {
                    const data = await res.json();
                    setLatestList(data);
                } else {
                    console.error("Failed to fetch latest registrations");
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestList();
    }, []);

    const handleLogout = async () => {
        await fetch(`${host}/api/admin/logout`, {
            method: "POST",
            credentials: 'include',
        });
        window.location.href = "/admin-login";
    };

    const handleSoftDelete = async (id) => {
        if (!window.confirm("Are you sure you want to remove this registration?")) return;

        try {
            const res = await fetch(`${host}/api/admin/registration/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (res.ok) {
                setLatestList(latestList.filter((item) => item._id !== id));
                alert("Registration moved to deleted list.");
            } else {
                alert("Failed to delete registration.");
            }
        } catch (err) {
            console.error("Delete error:", err);
            alert("Something went wrong.");
        }
    };

    return (
        <div className="admin-container d-flex">
            <AdminSidebar />
            <div className="main-content flex-grow-1" style={{ marginLeft: '0px', width: '100%' }}>
                <AdminNavbar onLogout={handleLogout} />
                <div className="p-4" style={{ marginLeft: '250px' }}>
                    <h3 className="text-white">All Latest Registrations</h3>

                    {loading ? (
                        <div className="text-white">Loading registrations...</div>
                    ) : latestList.length === 0 ? (
                        <div className="text-white">No registrations found.</div>
                    ) : (
                        <table className="table table-bordered mt-4">
                            <thead className="table-secondary">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Center Type</th>
                                    <th>Availability</th>
                                    <th>Registered At</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestList.map((reg) => (
                                    <tr key={reg._id}>
                                        <td>{reg.centerName}</td>
                                        <td>{reg.email}</td>
                                        <td>{reg.contact}</td>
                                        <td>{reg.centerType}</td>
                                        <td>{new Date(reg.availability).toLocaleDateString()}</td>
                                        <td>{new Date(reg.createdAt).toLocaleString()}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleSoftDelete(reg._id)}
                                            >
                                                Remove
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

export default LatestRegistrations;
