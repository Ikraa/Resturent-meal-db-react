import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    const {handleAddToOrder, meal}= props;

    return (
        <div className="meal">
            <img src={strMealThumb} alt="pic"/>
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button className="search-btn rounded" onClick={()=>handleAddToOrder(meal)}>Add this food</button>
        </div>
    );
};

export default Meal;