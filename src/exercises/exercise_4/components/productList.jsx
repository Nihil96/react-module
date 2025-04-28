import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

function ProductList() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - {product.price}
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
