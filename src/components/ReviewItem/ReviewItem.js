import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
    const{handleRemoveProduct,product} = props;
  const { name, price, shipping, quantity, img } = props.product;
  return (
    <div className="review-item">
      <div>
       
        <img src={img} alt="img" />
      </div>
      <div className="review-details-container">
      <div className="review-item-details">
            <p className="product-name" title={name}>{name.length>20?name.slice(0, 20)+'...':name}</p>
            <p>Price: {price}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className="delete-container">
            <button className="delete-Button" onClick={()=>handleRemoveProduct(product)}>  
                <FontAwesomeIcon icon={faTrashAlt} className="delete-Icon"></FontAwesomeIcon>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
