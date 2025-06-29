import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import About from './pages/About';
import Services from './pages/Services';
import EnquiryForm from './pages/EnquiryForm';
import Registration from './pages/Registration';
import Admin from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import EnquiryPage from './pages/EnquiryPage'
import DeletedRegistrations from './pages/DeletedRegistrations';
import LatestRegistration from './pages/LatestRegistration';




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/enquiry-form" element={<EnquiryForm />} />
          <Route exact path="/registration-form" element={<Registration />} />
          <Route exact path="/admin" element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          } />
          <Route exact path="/enquiry" element={
            <PrivateRoute>
              <EnquiryPage />
            </PrivateRoute>
          } />
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route path="/deleted-registrations" element={<DeletedRegistrations />} />
          <Route path="/latest-registration" element={<LatestRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
