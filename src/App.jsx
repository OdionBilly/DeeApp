import {  useState } from "react"
import Header from "./component/Layout/Header"
import Cart from "./component/Cart/Cart"
import CartProvider from "./context/CartProvider";
import Meals from "./component/mealcontainer/meals";




function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

 const showCartHandler = () => {
  setCartIsShown(true);
 };

 const hideCartHandler = () => {
  setCartIsShown(false); 
 };

//  console.log(cartIsShown);



  return (
    <CartProvider> 
      {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider> 

  )
}

export default App
