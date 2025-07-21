import React from "react";
import CarouselSection from "../components/CarouselSection";
import CarGrid from "../components/CarGrid";

export default function HomePage() {
  return (
    <div className="main-content">
      <CarouselSection />
      <section className="welcome-section">
        <h1 className="welcome-title">WELCOME TO CARRENTAL</h1>
        <div className="welcome-divider">
          <span className="line"></span>
          <span className="dot">•</span>
          <span className="line"></span>
        </div>
        <p className="welcome-desc">
          Chào mừng bạn đến với CarRental – nền tảng cho thuê xe chuyên nghiệp và uy tín hàng đầu!
Chúng tôi tự hào mang đến cho bạn một dịch vụ thuê xe hiện đại, đa dạng các dòng xe từ phổ thông đến cao cấp, đáp ứng mọi nhu cầu di chuyển từ cá nhân đến gia đình hay doanh nghiệp. Với thủ tục đơn giản, nhanh chóng và minh bạch về giá cả, CarRental cam kết đem đến trải nghiệm thuận tiện, an toàn và thoải mái nhất cho khách hàng.Hãy trải nghiệm hành trình tuyệt vời cùng chúng tôi.

        </p>
      </section>
      <section className="carlist-section">
        <h2 className="carlist-title">XE DÀNH CHO BẠN</h2>
        <div className="carlist-divider">
          <span className="line"></span>
          <span className="dot">•</span>
          <span className="line"></span>
        </div>
      </section>
      <CarGrid />
    </div>
  );
}