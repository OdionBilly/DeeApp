import Modal from "../UI/Modal"
const Cart = ({onClose}) => {

    const cartItems = <ul> {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => <l1 key={item.id}>{item.name}</l1>)}</ul>
        
    return ( 
     <Modal onClick={onClose}> 
        <div className=" max-sm:w-[330px] md:w-[570px] lg:w-[700px] bg-[#fdfdfd] mx-auto rounded-[14px] p-5">
            {cartItems}
            <div className="flex justify-between py-5">
                <span className="font-bold text-[20px]"> Total Amount</span>
                <span className="font-bold"> 35.62</span>
            </div>
            <div className="flex gap-3  max-sm:px-[100px] md:px-[100px] xl:mx-[380px] ">
                 <button className="px-6 py-2 border-[1px] border-[#802d00] rounded-[20px] hover:bg-[#802d00] hover:text-[white]" onClick={onClose}>close</button>
                 <button className="px-6 py-2 bg-[#802d00] rounded-[20px] text-[#fff]">Order</button>
            </div>      
        </div>
    </Modal> 
        )
    

}

export default Cart;