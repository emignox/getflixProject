import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // Effect to check for a valid token on mount
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // Token exists, navigate to home or the appropriate authenticated route
            navigate('/streamify/home');
        }
    }, [navigate]);
    // Function to handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://streamify-api.000webhostapp.com/login.php', {
                method: 'POST',
                mode: "cors",
                credentials: "omit",
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                if (data && data.message === 'Connexion réussie') {
                    const { token, username, role } = data;
                    // Store the token and user information in local storage
                    localStorage.setItem('token', token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('role', role);
                    // Set the token in state for future use
                    setToken(token);
                    navigate('/streamify/home');
                }
                else {
                    console.error('Login failed:', data.error);
                }
            }
            else {
                console.error('Login failed:', response.statusText);
            }
        }
        catch (error) {
            console.error('Login error:', error);
        }
    };
    // Function to handle logout
    const handleLogout = () => {
        // Clear the token and user information from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        // Remove the token from state
        setToken('');
        // Navigate to the login page or another appropriate route
        navigate('/streamify/login');
    };
    return (_jsx("div", { className: "overflow-hidden", children: _jsxs("div", { className: 'signup_body template d-flex justify-content-center align-items-center vh-100', children: [_jsx("div", { className: 'col-md-6 col-12 d-flex flex-column h-100', children: _jsx("div", { className: 'signup_card p-5 flex-fill', children: _jsxs("form", { className: 'h-100 d-flex flex-column justify-content-center', onSubmit: handleLogin, children: [_jsx("h1", { className: "fw-bold pol text-center pb-4", children: "Log in" }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'username', children: "Username" }), _jsx("input", { type: 'text', placeholder: 'Enter username', className: 'form-control', value: username, onChange: (e) => setUsername(e.target.value), required: true })] }), _jsxs("div", { className: 'mb-2', children: [_jsx("label", { htmlFor: 'password', children: "Password" }), _jsx("input", { type: 'password', placeholder: 'Enter password', className: 'form-control', value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx("div", { className: 'mt-2 mb-2', children: _jsx("button", { type: 'submit', className: 'btn', children: "Log in" }) }), _jsx("div", { children: _jsxs("p", { className: 'text-end mt-2', children: ["Forgot ", _jsx(Link, { className: 'link_login', to: '/streamify/forgot-password', children: "Password?" })] }) }), _jsx("div", { children: _jsxs("p", { children: [" If you don't have a account you can", _jsx(Link, { to: '/streamify/signup', className: 'link_login ms-2', children: "Register here" })] }) })] }) }) }), token && (_jsxs("div", { children: [_jsxs("p", { children: ["Welcome, ", localStorage.getItem('username'), "!"] }), _jsx("button", { onClick: handleLogout, children: "Logout" })] }))] }) }));
}
export default Login;
