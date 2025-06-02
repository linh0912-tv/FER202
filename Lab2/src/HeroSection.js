import React from 'react';

const HeroSection = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/pizza1.jpg" className="d-block w-100" alt="Neapolitan Pizza 1" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Neapolitan Pizza</h1>
            <p className="lead">If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/pizza2.jpg" className="d-block w-100" alt="Neapolitan Pizza 2" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Neapolitan Pizza</h1>
            <p className="lead">Authentic Italian flavors in every bite!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/pizza3.jpg" className="d-block w-100" alt="Neapolitan Pizza 3" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Neapolitan Pizza</h1>
            <p className="lead">Fresh ingredients, handmade with love!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/pizza4.jpg" className="d-block w-100" alt="Neapolitan Pizza 4" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Neapolitan Pizza</h1>
            <p className="lead">Perfect crust, perfect taste!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/pizza5.jpg" className="d-block w-100" alt="Neapolitan Pizza 5" style={{ height: '500px', objectFit: 'cover' }} />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="display-4 fw-bold">Neapolitan Pizza</h1>
            <p className="lead">A slice of Italy in every bite!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSection;