import React from 'react';
import './Bai5.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import student1 from './img/student1.jpg';
import student2 from './img/student2.jpg';
import student3 from './img/student3.jpg';
import student4 from './img/student4.jpg';
import logo from './img/Logo.png';
import banner from './img/group-photo.jpg';

const students = [
  {
    id: 'DE160192',
    name: 'Nguyễn Hò Quốc Oánh',
    image: student1,
    location: 'Đà Nẵng',
  },
  {
    id: 'DE160377',
    name: 'Chay Vĩnh Thiên',
    image: student2,
    location: 'Quảng Nam',
  },
  {
    id: 'DE160547',
    name: 'Đỗ Nguyên Phúc',
    image: student3,
    location: 'Quảng Nam',
  },
  {
    id: 'DE170049',
    name: 'Lê Hoàng Minh',
    image: student4,
    location: 'Đà Nẵng',
  },
];

const StudentPage = () => {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Top Bar */}
      <div className="topbar-bg d-flex align-items-center justify-content-between px-4 py-2">

        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" height="40" className="me-3" />
          <div>
            <a href="#" className="mx-2 topbar-link">Trang chủ</a>
            <a href="#" className="mx-2 topbar-link">Ngành học</a>
            <a href="#" className="mx-2 topbar-link">Tuyển sinh</a> 
            <a href="#" className="mx-2 topbar-link">Sinh Viên</a> 
          </div>
        </div>
        <div style={{ width: '220px' }}>
          <div className="d-flex align-items-center">
            <span className="me-2  text-dark">Search</span>
            <input type="text" className="form-control custom-xs-search"/>

          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="banner-container d-flex justify-content-center align-items-center">
        <img src={banner} className="banner-img" alt="Banner"/>
      </div>


      {/* Breadcrumb */}
      <div className="container py-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb custom-breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>


      {/* Student Detail */}
     <div className="container my-5">
  <h3 className="text-center mb-4">Students Detail</h3>
  <div className="row justify-content-center">
    {students.map((s, i) => (
      <div className="col-md-5 mb-4" key={i}> {/* Changed to col-md-5 for narrower cards */}
        <div className="card p-0 text-center">
          <img
            src={s.image}
            alt={s.name}
            className="card-img-top"
            style={{ width: '100%', height: '350px', objectFit: 'contain' }} // Changed to contain for natural image
          />
          <div
            className="card-body p-3"
            style={{ minHeight: '220px' }}
          >
            <p className="mb-2">{s.id}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="fw-bold mb-2">{s.name}</p>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input mb-1"
                    type="radio"
                    name={`status-${i}`}
                    id={`absent-${i}`}
                  />
                  <label className="form-check-label" htmlFor={`absent-${i}`}>
                    Absent
                  </label>
                </div>
              </div>
              <div>
                <p className="fw mb-2">{s.location}</p>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input mb-1"
                    type="radio"
                    name={`status-${i}`}
                    id={`present-${i}`}
                  />
                  <label className="form-check-label" htmlFor={`present-${i}`}>
                    Present
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-warning btn-sm mt-3">Submit</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      {/* Footer */}
      <footer className="bg-warning text-center p-4 text-white">
        <div>
          <p className="mb-1">Our Address</p>
          <p className="mb-1">FPT University, Khu CNC Hòa Lạc</p>
          <p className="mb-1">Hà Nội, Việt Nam</p>
        </div>
        <div className="my-2">
          <a href="#" className="text-white mx-1"><i className="bi bi-google"></i></a>
          <a href="#" className="text-white mx-1"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white mx-1"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="text-white mx-1"><i className="bi bi-youtube"></i></a>
        </div>
        <div>© Copyright 2023</div>
      </footer>
    </div>
  );
};

export default StudentPage;
