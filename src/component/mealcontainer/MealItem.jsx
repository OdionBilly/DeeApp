import PropTypes from 'prop-types';
import { useContext } from 'react';
import MealItemForm from './MealItemForm';
// import cartContext from '../../context/Cart-context'
import CartContext from '../../context/Cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)


    const AddToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            description: props.description,
            price: props.price
        });
    }




    // const price = `$${meal.price.toFixed(2)}`
return <li className='flex justify-between  w-full '>
    <div className="py-2  ">
        <div className='font-bold text-[20px]'>{props.name}</div>
        <div className='font-italic'>{props.description}</div>
        <div className='text-[#a13e22] font-bold'> $ {props.price}</div>
    </div>

    {/* <MealItemForm /> */}
    <div>
        <MealItemForm onAddToCart={AddToCartHandler}/>
    </div>
</li>
}
MealItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

   
export default MealItem