import { useState } from "react";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import Pal from "../components/Pal";
import FoodCard from "../components/FoodCard";


const Progress = () => {
  const [calories, setCalories] = useState(0)

  const foodList = getFoodList();
  function GetCals()
  {
      const currentCal = Number(Cookies.get('calories')) || 0;
      setCalories(currentCal)
  }




  useEffect(() => {
    GetCals()

  }, []);

  return (
    <div className='Container'>
        <h1>User Progress</h1>

        <Pal
          overrideMsg={
                    <>
                      Current Calorie Goal: 2000 kcal <br />
                      Current Sodium Goal: 2300mg<br />
                      Current Sugar Goal: 20g <br />
                      Current Fiber Goal: 30g 
                    </>
          }/>
        <h1>Todays Total</h1>

        <h1>Todays Food Plan</h1>
        <div className="food-list">
        {foodList.map((food, index) => (
          <FoodCard 
            key={index} 
            productName={food.productName} 
            calories={food.calories} 
            sugar={food.sugar}
            fiber={food.fiber}
            sodium={food.sodium}
          />
        ))}
      </div>
    </div>
  );
};

export default Progress;


function getFoodList() {
  const foodList = Cookies.get('foodList') || '';

  return foodList.split(';').map(item => {
    const [productName, calories, sugar, fiber, sodium] = item.split(':');
    return {
      productName, 
      calories: Number(calories), 
      sugar: Number(sugar), 
      fiber: Number(fiber), 
      sodium: Number(sodium)
    };
  });
}