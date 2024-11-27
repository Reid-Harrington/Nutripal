import { useState } from "react";
import Cookies from 'js-cookie';
import { useEffect } from "react";
import Pal from "../components/Pal";
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

        <Pal overrideMsg={`Current Calorie count: ${calories}
              Current Goal: 2000`}></Pal>
    </div>
  );
};

export default Progress;


