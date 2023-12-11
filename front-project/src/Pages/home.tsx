import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Slider from "../component/slider";

function home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Slider />
      <Footer />
    </div>
  );
}

export default home;
