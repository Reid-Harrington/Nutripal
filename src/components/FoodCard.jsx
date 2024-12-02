import "./FoodCard.css"

const FoodCard = ({ productName, calories, sugar, fiber, sodium }) => (
    <div className="food-card">
      <h3>{productName}</h3>
      <p>{calories} kcal</p>
      <p>{sugar} mg</p>
      <p>{fiber} g</p>
      <p>{sodium} mg</p>
    </div>
  );


  export default FoodCard