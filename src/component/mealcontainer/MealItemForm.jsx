import { useRef, useState } from 'react';
import Input from "../UI/Input";
// import { useState } from 'react';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);



    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ){
            setAmountIsValid(false)
            return;

        }
        props.onAddToCart(enteredAmountNumber);


    }
    console.log()


    return(
        <form className="" onSubmit={submitHandler}> 
            <Input
            ref={amountInputRef}
             label="Amount" 
             input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button className="px-6 py-1 bg-[#a0210ded] rounded-[50px] text-[#fff] font-semibold"> + Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )

};
export default MealItemForm