import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    const { order } = props;
    const countReducer = (previos, meal) => previos+meal.quantity;
    const count= order.reduce (countReducer, 0);


    return (
        <div>
            <h2>Order List</h2>
            {/* <h4>Items ordered:{order.length}</h4> */}
            <h4>Items ordered: {count}</h4>
        </div>
    );
};

export default OrderList;