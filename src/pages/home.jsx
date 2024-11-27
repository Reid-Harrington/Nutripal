import Pal from '../components/Pal';
import './home.css';

const Home = () => {
  function handleClick() {
    window.location.href = '/scanner';  // Redirects to new page
  }
  
  return (
    <div className='Container'>
      <h1>NutriPal</h1>
      <p>NutriPal is an all-in-one diet and allergy webapp. Start scanning now!</p>
      <button onClick={() => handleClick()}>Scan UPC!</button> 
      <Pal></Pal>
      <div className='Padding'></div>
    </div>
  );
};

export default Home;
