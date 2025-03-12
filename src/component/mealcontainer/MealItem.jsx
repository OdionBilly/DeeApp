import PropTypes from 'prop-types';
import { useContext } from 'react';
import MealItemForm from './MealItemForm';
// import cartContext from '../../context/Cart-context'
import CartContext from '../../store/Cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)


    const AddToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            image: props.image,
            amount: amount,
            description: props.description,
            price: props.price
        });
    }




    // const price = `$${meal.price.toFixed(2)}`
return <li className='flex justify-between mb-2  w-full py-5 border-b-2 border-[#802d00]'>
    <div className="">
        <div className='text-[18px] max-sm:w-[100px] xl:w-[400px]'><img src={props.image} alt="" className='rounded-[20px]' /></div>
        <div className='font-bold text-[20px] '>{props.name}</div>
        <div className='font-italic'>{props.description}</div>
        <div className='text-[#a13e22] font-bold'> $ {props.price}</div>
    </div>

    {/* <MealItemForm /> */}
    <div className=''>
        <MealItemForm onAddToCart={AddToCartHandler}/>
    </div>
</li>
}
MealItem.propTypes = {
    name: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

   
export default MealItem