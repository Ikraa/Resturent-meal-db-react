import React, { useEffect, useState } from 'react';
import Meal from '../Meal';

const Resturent = () => {

    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals));

    }, []);


    return (
        <div className='resturent-menu'>
            <div className='meals-container'> 
            {/* {
                meals.map(meal => )
            } */}
            <Meal>

</Meal>
            </div>

        </div>
    );
};

export default Resturent;