import React from 'react';
import './Header.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome To My Resturent</h2>
            <h4>
                Please order the food you like...&#129379; &#127871;&#128521;
            </h4>

            <div className='search-meal'>
                <input type='text' placeholder="Search your favorite food.."></input>
                <button className="search-btn">Search</button>

            </div>
        </div>
    );
};

export default Header;