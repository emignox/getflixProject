import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function App() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    axios.post('http://localhost:8000/login', { email, password })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return ( 
    
<div className="d-flex justify-content-center align-items-center vh-100">
  <form action='./index.php' method='POST'>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    
      <Button variant="primary" type="submit">Valider</Button>
    </form>
</div>

  )
  
}

export default App
