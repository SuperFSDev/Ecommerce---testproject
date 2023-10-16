import { useState } from "react";
import "../styles/modal.css";
import { OrderModal } from "./OrderModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function DetailsModal({ item, onClose }) {
  const [orderFlag, setOrderFlag] = useState(false);

  const orderHandler = () => {
    console.log("clicked");
    setOrderFlag(true);
  };

  const orderModalHandler = () => {
    setOrderFlag(false);
  };
  return (
    <div className="modalLayer">
      <div className="modalContainer">
        <div className="contents">
          <span>Title: {item.title}</span>
          <span>Description: {item.desc}</span>
          <span>Color: {item.color}</span>
          <span>Size: {item.size}</span>
          <span>Price: {item.price}</span>
        </div>
        <div className="buttonGroup">
          <button className="orderbtn" onClick={orderHandler}>
            Order
          </button>
          <button className="closebtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
      {orderFlag && (
        <OrderModal item={item} onClose={orderModalHandler}></OrderModal>
      )}
      <ToastContainer />
    </div>
  );
}
