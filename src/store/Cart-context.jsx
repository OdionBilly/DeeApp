import react from "react";



 const CartContext = react.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {
        // console.log("Adding item to cart");
    },
    removeItem: (id) => {}
});

export default CartContext