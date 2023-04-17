import CartContainer from "components/CartContainer.js";
import Navbar from "./components/Navbar.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "features/cart/cartSlice.js";
import Modal from "components/Modal.js";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading)
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  return (
    <h2>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </h2>
  );
}
export default App;
