import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar'
import Login from './Pages/login';
import Signup from './Pages/signup';
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
import Movies from './Pages/movies';
import SingleMovie from './Pages/movie';
import Slider from './component/slider';
import Series from './Pages/series';
import SingleSerie from './Pages/serie';
import SeriesSlider from './component/series_component';
import TopRatedSeries from './component/top_rated';
import Email from './Pages/email';
import Password from './Pages/password';
import TrailerPage from './Pages/trailer';
import Upcoming from './Pages/upcoming';
import Subscribe from './Pages/subscribe';
//import PrivateRoute from './component/PrivateRoute';


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/top_rated" element={<TopRatedSeries/>} />
        <Route path="/mail" element={<Email/>} />

        <Route path="/password" element={<Password/>} />
        <Route path="/home" element={<Home />} />



        <Route path="/serie" element={<SeriesSlider />} />
        <Route path="/slider" element={<Slider />} />
          <Route path="/username" element={<Username />} />
          <Route path="/stramify" element={<Presentation />} />
          <Route path="/" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/footer" element={<Footer />} />
          <Route path='/movies' element={<Movies /> } />
          <Route path='/series' element={<Series /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/movie/:id" element={ <SingleMovie /> } />
          <Route path="/serie/:id" element={ <SingleSerie /> } />
          <Route path="/movie/:id" element={ <SingleMovie /> } />
          <Route path="/movie/trailer/:id" element={ <TrailerPage /> } />
          <Route path="/upcoming" element={<Upcoming /> } />
          <Route path="/subscribe" element={<Subscribe /> } />
          <Route path="/other" element={
              <>
              <Navbar />
              <Jumbotron />
              {/* Altri componenti per il percorso /other */}
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App;



/*  Private routes  */

/*
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path='/username' element={<Username/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/footer" element={<Footer />} />
            <Route  path='/movies' element={ <Movies /> } />
            <Route path="/movies/watch/:id" element={ <SingleMovie /> } />
            <Route path="/other" element={
              <>
                <Navbar />
                <Jumbotron />
              </>
            } />
          </Route>

          <Route path="/" element={<Presentation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />          
        </Routes>
      </Router>
    </>
  )
}
*/