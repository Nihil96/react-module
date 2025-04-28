import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  emptyCart,
  incrementItem,
  removeFromCart,
} from "../actions/cartActions";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems?.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - {item.price} x {item.quantity}
                <button onClick={() => dispatch(incrementItem(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementItem(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </li>
            );
          })}
          <p>Total Cost: {totalCost}</p>
        </ul>
      )}
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
    </div>
  );
}

export default Cart;
