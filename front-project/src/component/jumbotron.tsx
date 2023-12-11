function Jumbotron() {
  return (
    <div className="jumbotron d-flex align-items-center" style={{ height: '100vh' }}>
    <div className="video-container d-flex justify-content-center" style={{ width: '100%', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
      className=" rounded-5 mx-5 "
        style={{ position: 'absolute', top: '5%', left: '0', width: '93%', height: '90%', border: 'none' }}
        src="https://www.youtube.com/embed/wArmHSPIvlQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  );
}

export default Jumbotron;
