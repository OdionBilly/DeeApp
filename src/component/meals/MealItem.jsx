import PropTypes from 'prop-types';
import MealItemForm from '../Meals/MealItemForm';

const MealItem = (meal) => {


    // const price = `$${meal.price.toFixed(2)}`
return <li className='flex justify-between'>
    <div className="py-2">
        <div className='font-bold text-[20px]'>{meal.name}</div>
        <div className='font-italic'>{meal.description}</div>
        <div className='text-[#a13e22] font-bold'> $ {meal.price}</div>
    </div>

    {/* <MealItemForm /> */}
    <div>
        <MealItemForm/>
    </div>
</li>
}
MealItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
   
export default MealItem