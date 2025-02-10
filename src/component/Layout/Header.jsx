import { Fragment } from "react"
import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import PropTypes from 'prop-types';
import mealsimage from '../../assets/meals.jpg'
import CartContext from "../../store/Cart-context";
// import CartButton from "./CartButton"

const Header = ({onShowCart}) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;

    }, 0)

    // console.log(cartCtx);


  
 
    return (
        <Fragment>
         <header className="fixed top-0 left-0 w-full h-16 bg-[#ac2614b8] text-white flex justify-between
          max-sm:px-4  items-center py-0 px-16 shadow-slate-800 z-10 "> 
            <h1 className="max-sm:text-[16px] max-sm:leading-5 max-sm:w-[100px] ">GCouasine</h1> 
            {/* <button className="px-4 py-1 bg-[white] text-gray-800">Cart</button> */}
            {/* <CartButton onclick={onShowCart}/> */}
            <button 
                onClick={onShowCart}
                className="cursor-pointer border-none bg-[#4d1601] text-[#fff] max-sm:py-1 md:py-2 xl:py-[0.75rem] max-sm:px-2 md:px-4 xl:px-[3rem] flex justify-between gap-2 items-center rounded-[25px] font-bold
                hover:bg-[#2c0d00] active:bg-[#2c0d00]" >
               <span>
                  <FiShoppingCart  />
               </span>
               <span>YourCart</span>
               <span className="bg-[#b94517] rounded-full w-8 h-6 flex justify-center items-center"> {numberOfCartItems} </span>
            </button>   
        </header>
            <div className="w-[100%] xl:h-[35rem] overflow-hidden z-0">
            <img src={mealsimage} alt="meals" className="w-full" />
            </div>
        </Fragment>
    )
   
}

export default Header

Header.propTypes = {
    onShowCart: PropTypes.func.isRequired,
  }