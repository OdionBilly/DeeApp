import { Fragment } from "react"
import { FiShoppingCart } from "react-icons/fi";
import PropTypes from 'prop-types';
import mealsimage from '../../assets/meals.jpg'
// import CartButton from "./CartButton"




const Header = ({onShowCart}) => {
    console.log(onShowCart);
  
 
    return (
        <Fragment>
         <header className="fixed top-0 left-0 w-full h-16 bg-[#ac2614b8] text-white flex justify-between
          items-center py-0 px-16 shadow-slate-800 z-10"> 
            <h1>Great food</h1> 
            {/* <button className="px-4 py-1 bg-[white] text-gray-800">Cart</button> */}
            {/* <CartButton onclick={onShowCart}/> */}
            <button 
                onClick={onShowCart}
                className="cursor-pointer border-none bg-[#4d1601] text-[#fff] py-[0.75rem] px-[3rem] flex justify-between gap-2 items-center rounded-[25px] font-bold
                hover:bg-[#2c0d00] active:bg-[#2c0d00]" >
               <span>
                  <FiShoppingCart  />
               </span>
               <span>YourCart</span>
               <span className="bg-[#b94517] rounded-full w-8 h-6 flex justify-center items-center"> 3 </span>
            </button>   
        </header>
            <div className="w-[100%] h-[35rem] overflow-hidden z-0">
            <img src={mealsimage} alt="meals" className="w-full" />
            </div>
        </Fragment>
    )
   
}

export default Header

Header.propTypes = {
    onShowCart: PropTypes.func.isRequired,
  }