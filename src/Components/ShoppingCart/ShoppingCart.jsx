import React, { useEffect } from 'react';
import './Shopping.css';
import { HiOutlineArrowNarrowLeft, HiPlus } from "react-icons/hi";
import { BiMinus } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../../Services/CarteSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ShoppingCart() {
  const URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    const numberCount = parseInt(localStorage.getItem("shoppingCartCount"));
    localStorage.setItem("shoppingCartCount", numberCount - 1);
    window.location.reload();

  };

  const handleClearCart = () => {
    dispatch(clearCart());
    const numberCount = (JSON.parse(localStorage.getItem("cartItems")));
    localStorage.setItem("shoppingCartCount", numberCount.length);
    window.location.reload();
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

// Fonction pour calculer le montant total du panier
const calculateTotalAmount = () => {
  // Utilise la méthode reduce sur les articles du panier pour calculer le total
  return cart.cartItems.reduce((total, cartItem) => {
    // Ajoute au total le prix du produit multiplié par la quantité de ce produit dans le panier
    return total + cartItem.attributes.productPrice * cartItem.cartQuantity;
  }, 0) // La valeur initiale du total est 0
  .toFixed(2); // Convertit le total en une chaîne de caractères avec deux décimales
};


  return (
    <div className="CartContainer">
      <h2>Shopping Cart</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is currently empty, continue shopping</p>
              </div>
            ) : (
              cart.cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td className="TDDetailsProduct">
                    <div className="DetailsProduct">
                      <img src={`${URL}${cartItem.attributes.productimage.data[0].attributes.url}`} alt="" />
                      <span className="DescriptionProduct">
                        <h3>{cartItem.attributes.productTitle}</h3>
                        <span id="BtnRemove" onClick={() => handleRemoveFromCart(cartItem)}>Remove</span>
                      </span>
                    </div>
                  </td>
                  <td>{cartItem.attributes.productPrice.toFixed(2)} dt</td>
                  <td id="QtProduct">
                    <BiMinus id="moins" onClick={() => handleDecreaseCart(cartItem)} />
                    {cartItem.cartQuantity}
                    <HiPlus id="plus" onClick={() => handleAddToCart(cartItem)} />
                  </td>
                  <td style={{ fontWeight: 'bold' }}>
                    {(cartItem.attributes.productPrice * cartItem.cartQuantity).toFixed(2)} dt
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="FinPartie">
        <span className="BtnClear" onClick={handleClearCart}>Clear Cart</span>

        <div className='piedTable'>
          <span className='Price'>
            <h3>Subtotal</h3>
            <h3>{calculateTotalAmount()} dt</h3>
          </span>

          <p>Taxes and shipping calculated at checkout</p>
          <span className='Btn_Check_Out'>check out</span><br />
          <span className='Btn_Continue' onClick={() => navigate('/')}>
            <HiOutlineArrowNarrowLeft size={27} id="BtnRetour" /> Continue Shopping
          </span>
        </div>
      </div>

      <ToastContainer
        position="bottom-left"
        autoClose={9000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
