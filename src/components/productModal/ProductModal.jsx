import React, { useState } from "react";
import "./ProductModal.css"; // Assuming you have a corresponding CSS file for styling

const ProductModal = ({ product, closeModal }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        {/* <span className="close" onClick={closeModal}>&times;</span> */}
        <div className="modal-body">
          <div className="modal-left">
            <img
              className="modal-image"
              src={product.imgUrl}
              alt={product.title}
            />
            <div className="modal-left_contents">
              <p className="modal-price">{product.price}</p>
              <button className="add-to-cart-btn">Add to cart</button>
              {/* <button className="like-btn">★ Like</button> */}
              <h4>User Comments</h4>
              {/* Render likes and comments here */}
              {comments.map((comment) => (
                <div key={comment.id}>
                  <p>
                    <strong>{comment.user}</strong>: {comment.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-right">
            <p className="modal-right_title">{product.title}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const comments = [
  { id: 1, user: "John Doe", comment: "Great product!" },
  { id: 2, user: "Jane Smith", comment: "Loved it!" },
];

export default ProductModal;
