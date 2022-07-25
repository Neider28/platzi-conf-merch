import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/ModalList.css';

const ModalList = () => {
  const { state, openModal, setOpenModal } = useContext(AppContext);
  const { cart } = state;

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="Information-modal">
      <div className="Information-modal-head">
        <h3>Order</h3>
        <button type="button" onClick={handleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
      {cart.length === 0 && <div className="empty"></div>}
      {cart.map((item) => (
        <div className="Information-modal-item" key={item.title}>
          <div className="Information-modal-element">
            <h4>{item.title}</h4>
            <span>${item.price * item.qty}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ModalList };
