import Pal from '../components/Pal';
import './home.css';


const Home = () => {
  return (
    <div className='Container'>
      <h1>NutriPal</h1>
      <p>NutriPal is an all-in-one diet and allergy webapp. Start scanning now!</p>
      <button>Scan UPC!</button> 
      <Pal></Pal>
      <div className='Padding'></div>
    </div>
  );
};

export default Home;
