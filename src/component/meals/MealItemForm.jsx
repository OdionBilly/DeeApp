import Input from "../UI/input";

const MealItemForm = () => {


    return(
        <form className=""> 
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            {/* <input type="text" name="" id="" className="border-[1px] border-[#150908ed]" /> */}
            <button className="px-6 py-1 bg-[#a0210ded] rounded-[50px] text-[#fff] font-semibold"> + Add</button>
        </form>
    )

};
export default MealItemForm