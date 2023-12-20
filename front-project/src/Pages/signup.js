import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login_singup.css';
function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'user',
    });
    const [registrationMessage, setRegistrationMessage] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://streamify-api.000webhostapp.com/registration.php', {
                method: 'POST',
                mode: "cors",
                credentials: "omit",
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                if (data.status === '200') {
                    setRegistrationMessage('Successfully registered!');
                    // Use setTimeout for redirection after a delay (e.g., 2000 milliseconds)
                    setTimeout(() => {
                        navigate('/streamify/login');
                    }, 2000);
                }
                else {
                    setRegistrationMessage('Registration failed. Please try again.');
                }
            }
            else {
                console.error('Registration failed:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error during registration:', error);
        }
    };
    return (_jsx("div", { className: "overflow-hidden", children: _jsx("div", { className: 'signup_body template d-flex justify-content-center align-items-center vh-100', children: _jsx("div", { className: 'col-md-6 col-12 d-flex flex-column h-100', children: _jsx("div", { className: 'signup_card p-5 flex-fill', children: _jsxs("form", { className: 'h-100 d-flex flex-column justify-content-center', onSubmit: handleSubmit, children: [_jsx("h1", { className: "fw-bold pol text-center pb-4", children: "Sign up" }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'username', children: "Username" }), _jsx("input", { type: 'text', placeholder: 'Enter your username', className: 'form-control', name: 'username', value: formData.username, onChange: handleChange, required: true })] }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'firstname', children: "Firstname" }), _jsx("input", { type: 'text', placeholder: 'Enter your firstname', className: 'form-control', name: 'firstname', value: formData.firstname, onChange: handleChange, required: true })] }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'lastname', children: "Lastname" }), _jsx("input", { type: 'text', placeholder: 'Enter your lastname', className: 'form-control', name: 'lastname', value: formData.lastname, onChange: handleChange, required: true })] }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'email', children: "Email" }), _jsx("input", { type: 'email', placeholder: 'Enter email', className: 'form-control', name: 'email', value: formData.email, onChange: handleChange, required: true })] }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'password', children: "Password" }), _jsx("input", { type: 'password', placeholder: 'Enter password', className: 'form-control', name: 'password', value: formData.password, onChange: handleChange, required: true })] }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'role' }), _jsx("input", { type: "hidden", name: "role", value: "user" })] }), _jsx("div", { className: 'mt-2 mb-2', children: _jsx("button", { className: 'btn', children: "Sign Up" }) }), _jsxs("p", { className: 'text-end mt-2', children: ["Already Registered? ", _jsx(Link, { to: '/login', className: 'link_login ms-2', children: "Log in" })] }), registrationMessage && (_jsx("p", { className: 'text-center text-success', children: registrationMessage }))] }) }) }) }) }));
}
export default Signup;
