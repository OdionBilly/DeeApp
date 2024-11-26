
import Card from "../UI/Card"
import MealItem from '../../component/Meals/MealItem'

const DummyMeals = [
    { id: 'm1', 
        name: 'Sushi', 
        description: 'Finest fish and veggies', 
        price: 22.99 },
    { id: 'm2', 
        name: 'Schnitzel', 
        description: 'A german specialty!', 
        price: 16.5 },
    { id: 'm3', 
        name: 'Barbecue Burger', 
        description: 'American, raw, meaty', 
        price: 12.99 },
    { id: 'm4', 
        name: 'Green Bowl', 
        description: 'Healthy...and green...', 
        price: 18.99 },
    {
        id: 'm5',
        name: 'Mediterranean',
        description: 'Healthy...and green...',
        price: 18.99
    },
    {
        id: 'm6',
        name: 'Beans soup',
        description: 'Healthy ...and green...',
        price: 28.99
    },
] 

const AvailableMeals =() => {
    const mealsList = DummyMeals.map((meal) =>  {     
        return <MealItem 
          meal={meal} 
          key={meal.id} 
          name={meal.name}
          description={meal.description}
          price={meal.price}
          />})



    return (
        <section className=" bg-[#000000ea] p-[100px] ">
            <Card>
                 <ul>{mealsList} </ul>
                 {/* <MealItem /> */}
            </Card>
        </section>
    )
}
export default AvailableMeals