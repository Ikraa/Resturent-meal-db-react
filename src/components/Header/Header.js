import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='mb-3 pb-3'>
            <h2 className="text-warning mt-3">Welcome To My Resturent</h2>
            <h4>
                Please order the food you like...&#129379; &#127871;&#128521;
            </h4>

            <div className='search-meal mt-3 pt-3'>
                <input type='text' placeholder="Search your favorite food..." className="w-50 rounded"></input>
                <button className="search-btn rounded px-2">Search</button>

            </div>
        </div>
    );
};

export default Header;