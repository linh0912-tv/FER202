import React from 'react';
import './Bai4.css'; 

const Bai4 = () => {
  return (
    <div>
      {/* Header */}
      <div className="header text-center py-4">
        <img
          src="https://atpcare.vn/wp-content/uploads/2023/08/Logo_Dai_hoc_FPT.png" 
          alt="FPT University Logo"
          className="img-fluid"
          style={{ maxWidth: '300px' }}
        />
        <div className="nav-links mt-2">
          <a href="#" className="mx-2 text-white text-decoration-none">Home</a>
          <a href="#" className="mx-2 text-white text-decoration-none">About</a>
          <a href="#" className="mx-2 text-white text-decoration-none">Contact</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container text-center my-5">
        <h4 className="fw-bold">About</h4>
        <p>This is the about section of the website.</p>

        <h4 className="fw-bold mt-4">Contact</h4>
        <p>
          For any inquiries, please contact us at{' '}
          <a >example@example.com</a>.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer text-center py-3">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Bai4;
