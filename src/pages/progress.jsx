import { useState } from "react";
import Cookies from 'js-cookie';
import { useEffect } from "react";
const Progress = () => {
  const [calories, setCalories] = useState(0)
  function GetCals()
  {
      const currentCal = Number(Cookies.get('calories')) || 0;
      setCalories(currentCal)
  }
  useEffect(() => {
    GetCals();
  }, []);

  return (
    <div className='Container'>
        <h1>PROGRESS</h1>
        <h1>Todays Current Calorie Count: {calories}</h1>
        <h1>Your Goal: 2000 Calories</h1>
    </div>
  );
};

export default Progress;


