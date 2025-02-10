import Modal from "../UI/Modal"
import { useContext } from "react"
import CartContext from "../../store/Cart-context"


const Cart = ({onClose}) => {

    const cartCtx = useContext(CartContext);

    const cartItems = 
    <ul> 
        {cartCtx.items.map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
    const TotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; 

    const hasItems = cartCtx.items.length > 0;

    
    return ( 
     <Modal onClick={onClose}> 
        <div className=" max-sm:w-[330px] md:w-[570px] lg:w-[700px] bg-[#fdfdfd] mx-auto rounded-[14px] p-5">
            {cartItems}
            <div className="flex justify-between py-5">
                <span className="font-bold text-[20px]">Total Amount</span>
                <span className="font-bold">{TotalAmount}</span>
            </div>
            <div className="flex gap-3  max-sm:px-[100px] md:px-[100px] xl:mx-[380px] ">
                 <button className="px-6 py-2 border-[1px] border-[#802d00] rounded-[20px] hover:bg-[#802d00] hover:text-[white]" onClick={onClose}>close</button>
                {hasItems && <button className="px-6 py-2 bg-[#802d00] rounded-[20px] text-[#fff]">Order</button>}
            </div>      
        </div>
    </Modal> 
        )
    

}

export default Cart;