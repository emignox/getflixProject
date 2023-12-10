import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";  

function home() {
  return (
    <div>
      <Navbar />
        <Jumbotron />
      <Footer />

    </div>
  );
}

export default home;