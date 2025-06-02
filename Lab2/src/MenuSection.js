import React from 'react';

const MenuCard = ({ title, price, originalPrice, image, badge }) => {
  return (
    <div className="card menu-card position-relative">
      {badge && (
        <span className={badge === 'SALE' ? 'sale-badge' : 'new-badge'}>{badge}</span>
      )}
      <img src={`/${image}`} className="card-img-top" alt={title} style={{ height: '300px', objectFit: 'cover' }} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {originalPrice && <span className="text-muted text-decoration-line-through me-2">{originalPrice}</span>}
          <span className="fw-bold">{price}</span>
        </p>
        <button className="btn btn-dark">Buy</button>
      </div>
    </div>
  );
};

const MenuSection = () => {
  const menuItems = [
    { title: 'Margherita Pizza', price: '$40.00', originalPrice: '$60.00', image: 'menu1.jpg', badge: 'SALE' },
    { title: 'Mushroom Pizza', price: '$25.00', image: 'menu2.jpg', badge: null },
    { title: 'Hawaiian Pizza', price: '$30.00', image: 'menu3.jpg', badge: 'NEW' },
    { title: 'Pesto Pizza', price: '$40.00', originalPrice: '$60.00', image: 'menu4.jpg', badge: 'SALE' },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-white mb-4">Our Menu</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {menuItems.map((item, index) => (
          <div className="col" key={index}>
            <MenuCard
              title={item.title}
              price={item.price}
              originalPrice={item.originalPrice}
              image={item.image}
              badge={item.badge}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;