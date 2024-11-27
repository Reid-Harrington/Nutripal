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
  const url = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`;
  const [productName, setProductName] = useState("")
  const [calories, setCalories] = useState("")
  const [allergies, setAllergies] = useState("")
  const [added, setAdded] = useState(false)
  axios.get(url)
  .then(response => {
    console.log('Data:', response.data); 
    setProductName(response.data.product.product_name);
    setCalories(response.data.product.nutriments['energy-kcal_serving'])
    setAllergies(response.data.product.allergens_from_ingredients)
    
  })
  .catch(error => {
    console.error('Error fetching the product:', error);
    
  });

  function handleClick()
  {
    setAdded(true)
    setCookieCals(Number(calories))
  }

  return (
    <div id='scannerContainer'>
      <h1>Barcode Scanner</h1>
      <div id="reader" ref={scannerRef}></div>
      <p>Detected Barcode: {barcode}</p>
      <p>Product: {productName}</p>
      <p>Calories Per Serving: {calories}</p>
      <p>Allergies: {cleanAllergies(allergies)}</p>
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
  
function setCookieCals(cals)
{
  const currentCal = Number(Cookies.get('calories')) || 0;
  const updateCals = currentCal + cals
  Cookies.set('calories', updateCals);
}