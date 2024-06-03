import React from "react";
import "./ShoppingBag.css";
import { images } from "../../constants";
import { data } from "../../constants";

const ShoppingBag = () => {
  return (
    <>
      <div class="image-content">
        <div class="bg-img">
          <div class="heading">
            <h1>SHOPPING BAG</h1>
          </div>
        </div>{" "}
      </div>
      <div class="main">
        <div class="selection">
          <div class="sub-title">
            <p class="eyebrow1">
              <strong>YOUR SELECTIONS</strong>
            </p>
            <a class="print" href="#">
              Print
            </a>
          </div>
          <div class="info">
            <div class="image">
              <img src={images.spainSaffron} alt="bag" className="product_img"/>
            </div>
            <div class="description">
              <div class="product">
                <div class="variation">
                  <p class="mini">Spain Saffron</p>
                </div>
                <div class="list">
                  <div class="available">
                    <p class="present">
                      <strong>AVAILABLE</strong>
                    </p>
                    <p class="immediate-purchase">
                      Your selection is available for immediate purchase online.
                    </p>
                  </div>
                  <a class="edit" href="">
                    EDIT
                  </a>
                  <a class="remove" href="">
                    REMOVE
                  </a>
                  
                </div>
              </div>
            </div>
            <div class="qty">
              <select name="qty" id="">
                <option value="1">Qty 1</option>
                <option value="2"> Qty 2</option>
                <option value="3"> Qty 3</option>
              </select>
            </div>
            <div class="amount">
              <p>₹ 1000</p>
            </div>
          </div>
        </div>
        <div class="summary">
          <div class="heading2">
            <p>
              <strong>ORDER SUMMARY</strong>
            </p>
            <p>USCART000001</p>
          </div>
          <div class="bill">
            <div class="subtotal">
              <p>Subtotal</p>
              <p>₹ 1000</p>
            </div>
            <div class="shipping-charge">
              <p>Shipping</p>
              <p>Free</p>
            </div>

            <div class="total">
              <p>Estimated Total</p>
              <p class="dollar">₹ 1000</p>
            </div>
          </div>
          <div class="view">
            <p>VIEW DETAILS</p>
            <p>
              {" "}
              <strong>+</strong>
            </p>
          </div>
          <div class="details">
            <p>
              You will be charged at the time of shipment. If this is a
              personalized or made-to-order purchase, you will be charged at the
              time of purchase.
            </p>
          </div>
          <div class="buttons">
            <button class="checkout"> CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
