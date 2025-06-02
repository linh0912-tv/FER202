import React from 'react';

const BookingForm = () => {
  return (
    <div className="container py-5">
      <h2 className="text-white text-center mb-4">Book Your Table</h2>
      <div className="card p-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name *</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email *</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">Select a Service</label>
          <select className="form-select" id="service">
            <option>Select a Service</option>
            <option>D sbagliato-in</option>
            <option>Takeaway</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Please write your comment</label>
          <textarea className="form-control" id="comment" rows="3" placeholder="Please write your comment"></textarea>
        </div>
        <button className="btn btn-warning" onClick={() => alert('Booking submitted!')}>Send Message</button>
      </div>
    </div>
  );
};

export default BookingForm;