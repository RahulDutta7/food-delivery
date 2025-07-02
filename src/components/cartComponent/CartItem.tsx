import React from "react";

const CartItem: React.FC = () => {
  return (
    <>
      <div className="cart_item">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=250&fit=crop"
          alt="Margherita"
          className="item_image"
        />
        <div className="item_info">
          <h3 className="item_name">Margherita</h3>
          <p className="item_desc">Tomato, mozzarella</p>
        </div>
        <div className="item_controls">
          <span>₹ 10.99</span>
          <div className="quantity_buttons">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
