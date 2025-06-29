import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const EnquiryForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        number: '',
        email: '',
        message: ''
    });

    const host = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        const { firstName, lastName, number, email, message } = form;

        if (!firstName || !lastName || !number || !email || !message) {
            alert("All fields are required.");
            return false;
        }

        if (!/^\d{10}$/.test(number)) {
            alert("Phone number must be exactly 10 digits.");
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Invalid email format.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const res = await fetch(`${host}/api/enquiry/enquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (res.ok) {
                alert("Enquiry submitted successfully");
                setForm({
                    firstName: '',
                    lastName: '',
                    number: '',
                    email: '',
                    message: ''
                });

                // Navigate to home after successful submission
                navigate('/');
            } else {
                alert("Failed to submit: " + (data.errors?.[0]?.msg || 'Unknown error'));
            }
        } catch (err) {
            console.error("Error submitting enquiry:", err);
            alert("Something went wrong");
        }
    };

    return (
        <div>
            <section>
                <Header />
            </section>

            <section className="enquiry-image">
                <h1>Enquiry Form</h1>
                <div className="img">
                    <img
                        src="https://media.istockphoto.com/id/700287204/photo/female-user-passes-security-authorization-system.jpg?s=612x612&w=0&k=20&c=BWxu89eOQyX2pC6wpXPp1DhjqbOjz5Ptk2d5IOlir8M="
                        alt="image"
                    />
                </div>
            </section>

            {/* Form Section Start */}
            <section className="form w-100 h-100 mt-5 mb-5 enquiry">
                <h1 className="mb-5 ms-5 fw-bold">Message Your Query</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-5 ms-5">
                        <label htmlFor="firstName" className="form-label fw-bold fs-5">
                            First Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" id="firstName" value={form.firstName} onChange={onChange} required />
                    </div>
                    <div className="col-md-5 ms-5">
                        <label htmlFor="lastName" className="form-label fw-bold fs-5">
                            Last Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" id="lastName" value={form.lastName} onChange={onChange} required />
                    </div>
                    <div className="col-5 ms-5">
                        <label htmlFor="number" className="form-label fw-bold fs-5">
                            Phone Number <span className="text-danger">*</span>
                        </label>
                        <input type="tel" className="form-control" id="number" value={form.number} onChange={onChange} required />
                    </div>
                    <div className="col-5 ms-5">
                        <label htmlFor="email" className="form-label fw-bold fs-5">
                            Email Address <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" id="email" value={form.email} onChange={onChange} required />
                    </div>
                    <div className="col-md-11 ms-5">
                        <label htmlFor="message" className="fw-bold fs-5">
                            Message <span className="text-danger">*</span>
                        </label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Write your message" value={form.message} onChange={onChange} required />
                    </div>
                    <div className="col-11 ms-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </section>
            {/* Form Section End */}

            <section>
                <Footer />
            </section>
        </div>
    );
};

export default EnquiryForm;
