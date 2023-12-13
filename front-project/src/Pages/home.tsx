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
      <div className="" style={{position:'relative', zIndex:6, marginTop:'130px'}}>
      <Slider />
      <SeriesSlider />
      </div>
      <Footer />
    </div>
  );
}

export default home;
