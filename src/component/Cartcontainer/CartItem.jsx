// import React from 'react'


export const CartItem = (cartItems) => {
    const price = `$${cartItems.price.toFixed(2)}`;

    // console.log(cartItems);


  return (
    <li className="">
    <div className="py-5 border-b-2 border-[#802d00]">
          <h1>{cartItems.name}</h1>
        <div className="flex justify-between">
           <div className="gap-[70%] flex ">
             <span className="text-[#802d00]">{price}</span>
             <span className=" border-2  px-2">x{cartItems.amount}</span>
           </div>
           <div className="flex gap-5">
             <button className="px-3 border-2" onClick={cartItems.onRemove}>-</button>
             <button className="px-3 border-2" onClick={cartItems.onAdd}>+</button>
            </div>
         </div>
     </div>
    </li>

  )

}
