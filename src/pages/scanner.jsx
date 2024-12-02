import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import "./scanner.css"
import axios from 'axios';
import Cookies from 'js-cookie';
const Scanner = () => {
  const [barcode, setBarcode] = useState('No barcode detected');
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader', 
      {
        fps: 5, 
        qrbox: { width: 300, height: 300 }, 
        formatsToSupport: ['QR_CODE', 'CODE_128'],
      },
      false 
    );

    const handleResult = (decodedText) => {
      console.log('Decoded Text:', decodedText);
      setBarcode(decodedText);
    };

    const handleError = (error) => {
      console.warn('Scan Error:', error);
    };

    scanner.render(handleResult, handleError);

    return () => {
      scanner.clear();
    };
  }, []); 


  //BARCODE API REQUEST
  const [productName, setProductName] = useState("")
  const [calories, setCalories] = useState("")
  const [sodium, setSodium] = useState("")
  const [fiber, setFiber] = useState("")
  const [sugar, setSugar] = useState("")

  const [allergies, setAllergies] = useState("")
  const [added, setAdded] = useState(false)
  
  const APIurl = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`

  axios.get(APIurl).then(response => {
    setProductName(response.data.product.product_name)
    
    setCalories(response.data.product.nutriments['energy-kcal_serving'])
    
    setAllergies(response.data.product.allergens_from_ingredients)
    
    setSodium(response.data.product.nutriments.sodium_serving)
    
    setFiber(response.data.product.nutriments.fiber_serving)
    
    setSugar(response.data.product.nutriments.sugars_serving)

  }).catch(error => {
    console.error('Error fetching the product:', error)
  });

  function handleClick()
  {
    setAdded(true)
    AddToFoodList(productName, Number(calories), Number(sugar), Number(fiber), Number(sodium));
  }

  return (
    <div id='scannerContainer'>
      <h1>Barcode Scanner</h1>
      <div id="reader" ref={scannerRef}></div>
      <p>Detected Barcode: {barcode}</p>
      <p>Product: {productName}</p>
      <p>Calories Per Serving: {calories}</p>
      <p>Allergies: {cleanAllergies(allergies)}</p>
      <p>Fiber Per Serving: {fiber}</p>
      <p>Sugar Per Serving: {sugar}</p>
      <p>Sodium Per Serving: {sodium}</p>

      <button className='AddButton' onClick={() => handleClick()}>{added ? '✔️' : <b>Add To Todays NutriPlan!</b>}</button>
      <h1>{added? "Added to Todays Progress!" : ""}</h1>
    </div>
  );
};

  
  export default Scanner;
  
// This function quickly cleans up the formatting returned by the JSON from the FoodFacts API. 
function cleanAllergies(allergies) {
    if (!allergies) return "none";
  
    const allergensString = allergies
      .split(',')
      .map(allergen => allergen.replace(/en:/g, '').trim()) 
      .filter((value, index, self) => self.indexOf(value) === index); 
  
    
      return allergensString.join(', '); 
  }
  



function AddToFoodList(productName, calories, sugar, fiber, sodium) {
  const foodList = Cookies.get('foodList') || '';

  const newFood = `${productName}:${calories}:${sugar}:${fiber}:${sodium}`;

  const updatedFoodList = foodList ? `${foodList};${newFood}` : newFood;

  Cookies.set('foodList', updatedFoodList);
}

/*/
function setCookieCals(num)
{
  const currentCal = Number(Cookies.get('calories')) || 0;
  const updateCals = currentCal + num
  Cookies.set('calories', updateCals);
}

function setCookieSugar(num)
{
  const currentSug = Number(Cookies.get('sugar')) || 0;
  const updateSug = currentSug + num
  Cookies.set('sugar', updateSug);
}


function setCookieFiber(num)
{
  const currentFib = Number(Cookies.get('fiber')) || 0;
  const updateFib = currentFib + num
  Cookies.set('fiber', updateFib);
}

function setCookieSodium(num)
{
  const currentSod = Number(Cookies.get('sodium')) || 0;
  const updateSod = currentSod + num
  Cookies.set('sodium', updateSod);
}
/*/