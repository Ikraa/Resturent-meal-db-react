import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    const {order} = props;
    return (
        <div>
            <h2>Order List</h2>
            <h4>Items ordered:{order.length}</h4>
        </div>
    );
};

export default OrderList;