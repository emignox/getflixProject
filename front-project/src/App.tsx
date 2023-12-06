import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar'
import Login from './Pages/login';
import Jumbotron from './component/jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css'
import Presentation from './Pages/streamify';
import Footer from './component/footer'
import Privacy from './Pages/privacy';
import Home from './Pages/home';
import Profile from './Pages/profile';
import Username from './Pages/username';
import './App.css';
import ForgotPassword from './Pages/forgotPassword';
import ResetPassword from './Pages/resetPassword';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Username />} />
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/streamify" element={<Presentation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/other" element={
            <>
            <Navbar />
            <Jumbotron />
            {/* Altri componenti per il percorso /other */}
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App;