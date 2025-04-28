import "./App.css";
import Auth from "./examples/lecture_10/components/auth";
import Counter from "./examples/lecture_10/components/counter";
import Cart from "./exercises/exercise_4/components/cart";
import ProductList from "./exercises/exercise_4/components/productList";

function App() {
  return (
    <>
      {/* Example 1 */}
      {/* <Counter /> */}

      {/* Example 2 */}
      {/* <Auth /> */}

      {/* Exercise 4 */}
      <h2>Shoping Cart with Redux</h2>
      <ProductList />
      <Cart />
    </>
  );
}

export default App;
