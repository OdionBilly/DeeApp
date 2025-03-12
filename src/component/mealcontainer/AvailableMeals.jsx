
import Card from "../UI/Card"
import MealItem from './MealItem'

const DummyMeals = [
    { id: 'm1', 
        name: 'Sushi', 
        description: 'Finest fish and veggies', 
        price: 22.99,
        image: '/src/assets/meals-img/sushi.jpg'
    },
    { id: 'm2', 
        name:'Schnitzel', 
        description: 'A german specialty!', 
        price: 16.5,
        image: '/src/assets/meals-img/schnitzel.jpg'
    },
    { id: 'm3', 
        name: 'Barbecue Burger', 
        description: 'American, raw, meaty', 
        price: 12.99,
        image: '/src/assets/meals-img/ Burger.jpg'
     },
    { id: 'm4', 
        name: 'Green Bowl', 
        description: 'Healthy...and green...', 
        price: 18.99,
        image: '/src/assets/meals-img/beanssoup.jpg'
    },
    {
        id: 'm5',
        name: 'Mediterranean',
        description: 'Healthy...and green...',
        price: 18.99,
        image: '/src/assets/meals-img/med.jpg'  
    },
    {
        id: 'm6',
        name: 'Beans soup',
        description: 'Healthy ...and green...',
        price: 28.99,
        image: '/src/assets/meals-img/beanssoup.jpg'  
    },
] 

const AvailableMeals =() => {
    const mealsList = DummyMeals.map((meal) =>  {     
        return <MealItem 
          meal={meal} 
          key={meal.id} 
          id={meal.id}
          name={meal.name}
          image={meal.image}
          description={meal.description}
          price={meal.price}
          />});



    return (
        <section className=" bg-[#000000ea] max-sm:pt-[40%] max-sm:p-4 md:pt-[20%] md:p-[80px] lg:pt-[10%] lg:p-[100px] ">
            <Card>
                 <ul>{mealsList} </ul>
                 {/* <MealItem /> */}
            </Card>
        </section>
    )
}
export default AvailableMeals