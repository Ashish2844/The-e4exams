// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import {  useLayoutEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Registration = () => {
//     const host = import.meta.env.VITE_API_URL;
//     const [form, setform] = useState({
//         centerName: '',
//         postalAddress: '',
//         contact: '',
//         email: '',
//         centerType: '',
//         availability: ''
//     })

//     const navigate = useNavigate()
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const { centerName, postalAddress, contact, email, centerType } = form;

//         // 💡 Frontend validation
//         if (centerName.trim().length < 3) {
//             alert("Center name must be at least 3 characters.");
//             return;
//         }

//         if (!postalAddress.trim()) {
//             alert("Postal address is required.");
//             return;
//         }

//         if (!/^\d{10,}$/.test(contact)) {
//             alert("Contact must be a number and at least 10 digits.");
//             return;
//         }

//         if (!/\S+@\S+\.\S+/.test(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         if (!centerType) {
//             alert("Please select a center type.");
//             return;
//         }

//         if (!availability) {
//             alert("Please select a date.");
//             return;
//         }

//         // ✅ If all fields are valid, continue to send request
//         try {
//             const response = await fetch(`${host}/api/user/register`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(form),
//             });

//             const json = await response.json();

//             if (response.ok && json.success) {
//                 alert("Registration successful");
//                 navigate('/');
//             } else {
//                 alert("Registration failed: " + (json.errors?.[0]?.msg || "Unknown error"));
//             }
//         } catch (error) {
//             console.error("Registration error:", error);
//             alert("Something went wrong. Please try again.");
//         }
//     };

//     useLayoutEffect(()=>{
//         window.scrollTo(0,0)
//     },[])


//     const onChange = (e) => {
//         setform({ ...form, [e.target.name]: e.target.value })
//     }

//     const onRadioChange = (e) => {
//         const { value } = e.target;
//         setform((prevForm) => ({
//             ...prevForm,
//             centerType: value,
//         }));
//     };


//     return (
//         <div>
//             <section className='header'><Header /></section>
//             <section className="enquiry-image">
//                 <h1>Registration  Form</h1>
//                 <div className="img">
//                     <img src="https://media.istockphoto.com/id/700287204/photo/female-user-passes-security-authorization-system.jpg?s=612x612&w=0&k=20&c=BWxu89eOQyX2pC6wpXPp1DhjqbOjz5Ptk2d5IOlir8M=" alt="image" />
//                 </div>
//             </section>


//             {/* Form Section Start */}
//             <section className="form w-100 h-100 mt-5 mb-5 registration">
//                 <h1 className='mb-5 ms-5 fw-bold'>Registeration</h1>
//                 <form className="row g-3" onSubmit={handleSubmit}>
//                     <div className="col-md-11 ms-5">
//                         <label htmlFor="test center" className="form-label fw-bold fs-5">Test Center Name <span className="text-danger">*</span></label>
//                         <input type="text" className="form-control " id="centerName" onChange={onChange} name='centerName' required />
//                     </div>
//                     <div className="col-md-11 ms-5">
//                         <label htmlFor="postal address" className="form-label fw-bold fs-5">Postal Address <span className="text-danger">*</span></label>
//                         <input type="text" className="form-control" id="postalAddress" onChange={onChange} name='postalAddress' required />
//                     </div>
//                     <div className="col-md-5 ms-5">
//                         <label htmlFor="contact" className="form-label fw-bold fs-5">Contact Number <span className="text-danger">*</span></label>
//                         <input type="tel" className="form-control" id="contact" onChange={onChange} name='contact' required />
//                     </div>
//                     <div className="col-md-5 ms-5">
//                         <label htmlFor="email address" className="form-label fw-bold fs-5">Email Address  <span className="text-danger">*</span></label>
//                         <input type="email" className="form-control" id="email" onChange={onChange} name='email' required />
//                     </div>
//                     <div className="col-md-5 ms-5">
//                         <label htmlFor="category of test center" className="form-label fw-bold fs-5">Category of Test Center <span className="text-danger">*</span></label>
//                         <div className='d-flex'>
//                             <input type="radio" checked={form.centerType==="Private Test Center"} value="Private Test Center" className="form-check" name='centerType' onChange={onRadioChange} />
//                             <label>Private Test Center</label></div>
//                         <div className='d-flex'>
//                             <input type="radio" checked={form.centerType==='School'} value="School" className="form-check" name='centerType' onChange={onRadioChange} />
//                             <label>School</label></div>
//                         <div className='d-flex'>
//                             <input type="radio" checked={form.centerType==='College'} value="College" className="form-check" name='centerType' onChange={onRadioChange} />
//                             <label>College</label></div>
//                         <div className='d-flex'>
//                             <input type="radio" value="Govt. Institutions / University" checked={
//                                 form.centerType==="Govt. Institutions / University"
//                             } className="form-check" name='centerType' onChange={onRadioChange} />
//                             <label>Govt. Institutions / University</label></div>
//                     </div>

//                     <div className="col-md-5 ms-5">
//                         <label htmlFor="Available" className="form-label fw-bold fs-5">Availability  <span className="text-danger">*</span></label>
//                         <input type="date" className="form-control" value={form.availability} id="availability" name='availability' onChange={onChange} required />
//                     </div>

//                     <div className="col-11 ms-5">
//                         <button type="submit" className="btn btn-primary">Submit</button>
//                     </div>
//                 </form>
//             </section>
//             {/* Form Section End */}
//             <section className="footer"><Footer /></section>

//         </div>
//     )
// }

// export default Registration

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const host = import.meta.env.VITE_API_URL;
    const [form, setform] = useState({
        centerName: '',
        postalAddress: '',
        contact: '',
        email: '',
        centerType: '',
        availability: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateField = (name, value) => {
        let message = "";

        switch (name) {
            case "centerName":
                if (!value.trim()) message = "Center name is required";
                else if (value.trim().length < 3) message = "Must be at least 3 characters";
                break;
            case "postalAddress":
                if (!value.trim()) message = "Postal address is required";
                break;
            case "contact":
                if (!/^\d{10,}$/.test(value)) message = "Enter a valid 10-digit number";
                break;
            case "email":
                if (!/\S+@\S+\.\S+/.test(value)) message = "Enter a valid email";
                break;
            case "centerType":
                if (!value) message = "Select a center type";
                break;
            case "availability":
                if (!value) message = "Select availability date";
                break;
            default:
                break;
        }

        setErrors(prev => ({ ...prev, [name]: message }));
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
        validateField(name, value);
    };

    const onRadioChange = (e) => {
        const { value } = e.target;
        setform(prev => ({ ...prev, centerType: value }));
        validateField("centerType", value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fieldNames = Object.keys(form);
        let valid = true;
        fieldNames.forEach(field => {
            validateField(field, form[field]);
            if (form[field] === '' || errors[field]) valid = false;
        });

        if (!valid) {
            alert("Please fix the validation errors");
            return;
        }

        try {
            const response = await fetch(`${host}/api/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const json = await response.json();

            if (response.ok && json.success) {
                alert("Registration successful");
                navigate('/');
            } else {
                alert("Registration failed: " + (json.errors?.[0]?.msg || "Unknown error"));
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className='header'><Header /></section>
            <section className="enquiry-image">
                <h1>Registration  Form</h1>
                <div className="img">
                    <img src="https://media.istockphoto.com/id/700287204/photo/female-user-passes-security-authorization-system.jpg?s=612x612&w=0&k=20&c=BWxu89eOQyX2pC6wpXPp1DhjqbOjz5Ptk2d5IOlir8M=" alt="image" />
                </div>
            </section>

            <section className="form w-100 h-100 mt-5 mb-5 registration">
                <h1 className='mb-5 ms-5 fw-bold'>Registeration</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-11 ms-5">
                        <label className="form-label fw-bold fs-5">Test Center Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="centerName" value={form.centerName} onChange={onChange} />
                        {errors.centerName && <small className="text-danger">{errors.centerName}</small>}
                    </div>
                    <div className="col-md-11 ms-5">
                        <label className="form-label fw-bold fs-5">Postal Address <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="postalAddress" value={form.postalAddress} onChange={onChange} />
                        {errors.postalAddress && <small className="text-danger">{errors.postalAddress}</small>}
                    </div>
                    <div className="col-md-5 ms-5">
                        <label className="form-label fw-bold fs-5">Contact Number <span className="text-danger">*</span></label>
                        <input type="tel" className="form-control" name="contact" value={form.contact} onChange={onChange} />
                        {errors.contact && <small className="text-danger">{errors.contact}</small>}
                    </div>
                    <div className="col-md-5 ms-5">
                        <label className="form-label fw-bold fs-5">Email Address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name="email" value={form.email} onChange={onChange} />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <div className="col-md-5 ms-5">
                        <label className="form-label fw-bold fs-5">Category of Test Center <span className="text-danger">*</span></label>
                        <div className='d-flex flex-column gap-1'>
                            {['Private Test Center', 'School', 'College', 'Govt. Institutions / University'].map(type => (
                                <label key={type} className="d-flex align-items-center gap-2">
                                    <input
                                        type="radio"
                                        name="centerType"
                                        value={type}
                                        checked={form.centerType === type}
                                        onChange={onRadioChange}
                                    /> {type}
                                </label>
                            ))}
                        </div>
                        {errors.centerType && <small className="text-danger">{errors.centerType}</small>}
                    </div>
                    <div className="col-md-5 ms-5">
                        <label className="form-label fw-bold fs-5">Availability <span className="text-danger">*</span></label>
                        <input type="date" className="form-control" name="availability" value={form.availability} onChange={onChange} />
                        {errors.availability && <small className="text-danger">{errors.availability}</small>}
                    </div>
                    <div className="col-11 ms-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </section>

            <section className="footer"><Footer /></section>
        </div>
    );
};

export default Registration;
