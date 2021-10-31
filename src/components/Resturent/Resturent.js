import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Resturent.css';
import OrderList from '../Order/OrderList';
import { addToDb, getDb } from '../../localStorage/LocalStorage';
const Resturent = () => {

    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals));

    }, []);

    useEffect(() => {

        console.log("call local Storage");
        if (meals.length){
            const savedDb = getDb();
            const savedOrder= [];
            for (const mealId in savedDb) {
                const meal = meals.find(ml => ml.idMeal === mealId);
                savedOrder.push(meal);
            }
            setOrder(savedOrder);
        }

    }, [meals]);

    const handleAddToOrder = meal => {
        const newOrder = [...order, meal];
        setOrder(newOrder);
        console.log(meal);
        addToDb(meal.idMeal);
    }


    return (
        <div className='resturent-menu'>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        handleAddToOrder={handleAddToOrder}
                    >

                    </Meal>)
                }

            </div>
            <div className='order-list'>

                <OrderList order={order}></OrderList>

            </div>

        </div>
    );
};

export default Resturent;