import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GridLayout.css';

const GridLayout = () => {
  return (
    <div className="grid-container">
      <div className="header-bg text-center py-4">
        <h1>Let's test the grid!</h1>
        <div className="header-links d-flex justify-content-center">
          <a className="nav-link active text-primary" href="#">Active</a>
          <a className="nav-link text-primary" href="#">Link</a>
          <a className="nav-link text-primary" href="#">Link</a>
          <a className="disabled text-muted" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-6 grid-item">First col</div>
          <div className="col-md-6 grid-item">Second col</div>
        </div>
        <div className="row ">
          <div className="col-md-4 grid-item">col</div>
          <div className="col-md-4 grid-item">col</div>
          <div className="col-md-4 grid-item">col</div>
        </div>
        <div className="row ">
          <div className="col-md-3 grid-item">col</div>
          <div className="col-md-3 grid-item">col</div>
          <div className="col-md-3 grid-item">col</div>
          <div className="col-md-3 grid-item">col</div>
        </div>
      </div>

      <div className="footer-bg text-center py-2">
        <p className="m-0 fw-bold fs-4">Created by ABC!</p>
      </div>
    </div>
  );
};

export default GridLayout;
