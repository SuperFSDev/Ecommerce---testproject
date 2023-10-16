import { useState } from "react";
import "../styles/modal.css";
import axios from "axios";
import { toast } from "react-toastify";

export function OrderModal({ item, onClose }) {
  const [amount, setAmount] = useState();

  const handler = () => {
    let status = false;
    const createNewOrder = async () => {
      try {
        const res = await axios.post(`http://localhost:4000/api/orders`, {
          productId: item._id,
          productName: item.title,
          amount,
        });
        if (res.status === 200) {
          status = true;
        }
      } catch (err) {}
    };
    createNewOrder().then((res) => {
      if (status) {
        toast("success");
      } else {
        toast("failed");
      }
    });
    onClose();
  };
  return (
    <div className="modalLayer">
      <div className="modalContainer">
        <div className="contents">
          <span>Please enter total amount:</span>
          <input onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <div className="buttonGroup">
          <button className="orderbtn" onClick={handler}>
            OK
          </button>
          <button className="closebtn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
