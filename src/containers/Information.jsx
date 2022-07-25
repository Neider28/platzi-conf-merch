import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.js';
import { Modal } from '../components/Modal.jsx';
import { Helmet } from 'react-helmet';
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer, openModal, setOpenModal } = useContext(AppContext);
  const { cart } = state;
  const history = useNavigate();
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);
    history('/checkout/payment');
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Helmet>
        <tittle>Checkout | Information</tittle>
      </Helmet>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Contact information</h2>
            <button className="modal-order" type="button" onClick={handleModal}>
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Full name" name="name" />
              <input type="email" placeholder="Email" name="email" />
              <input type="text" placeholder="Address" name="address" />
              <input type="city" placeholder="City" name="city" />
              <input type="county" placeholder="Country" name="country" />
              <input type="text" placeholder="State" name="state" />
              <input type="text" placeholder="Postal code" name="cp" />
              <input type="tel" placeholder="Phone" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">
                <i className="fa fa-angle-left"></i>
              </Link>
            </div>
            <div className="Information-next">
              <button type="button" className="button" onClick={handleSubmit}>
                Pay <i className="fa fa-comment-dollar"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Order</h3>
          {cart.length === 0 && <div className="empty-sidebar"></div>}
          {cart.map((item) => (
            <div className="Information-item" key={item.title}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price * item.qty}</span>
              </div>
            </div>
          ))}
        </div>
        {openModal && <Modal />}
      </div>
    </>
  );
};

export { Information };
