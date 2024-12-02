import Pal from '../components/Pal';
import './home.css';
import StockPhoto from "../assets/StockPhoto.jpg"

const Home = () => {
  function handleClick() {
    window.location.href = '/scanner';  // Redirects to new page
  }
  
  return (
    <div className='Container'>
      <div className='Text-Container'>
        <h1>Your Nutrition Companion</h1>
        <p>NutriPal is an all-in-one diet and allergy webapp</p>
      </div>
      <img src={StockPhoto} className='StockPhoto'></img>

      <h3>Empower your health goals:</h3> <p className='desc'>Navigating food choices is harder than ever, let NutriPal take care of it for you. 
      </p>
      <h3>Simplify your food choices</h3> <p className='desc'>Instantly scan UCP codes to access nutritional information, allergen alerts, and dietary suitability.</p>
      <h3>Set user defined goals:</h3> <p className='desc'>Whether it’s gluten-free, halal, kosher, vegan, or anything in between, tailor your meals to fit your unique needs.</p>
      
      <button onClick={() => handleClick()}>Start Scanning!</button> 
      <Pal></Pal>
      <div className='Padding'></div>
    </div>
  );
};

export default Home;
