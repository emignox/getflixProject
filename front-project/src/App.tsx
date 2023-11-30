import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar'
import Login from './Pages/login';
import Jumbotron from './component/jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css'
import Presentation from './Pages/streamify';
import Footer from './component/footer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/streamify" element={<Presentation />} />
        <Route path="/login" element={<Login />} />
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