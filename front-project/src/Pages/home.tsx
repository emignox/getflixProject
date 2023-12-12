import Navbar from "../component/navbar";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
import Slider from "../component/slider";
import SeriesSlider from "../component/series_component";

function home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Slider />
      <SeriesSlider />
      <Footer />
    </div>
  );
}

export default home;
