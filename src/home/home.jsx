import React, { useState, useEffect } from 'react';
import items from './achievementItems'; 
import './Home.css';
import Cookies from 'js-cookie';

const Home = () => {
    const savedColors = Cookies.get('itemColors');
    const initialColors = savedColors
        ? JSON.parse(savedColors) : items.map(() => "red");

    const [itemColors, setItemColors] = useState(initialColors);

    const calculatePercentage = () => {
        const greenItems = itemColors.filter(color => color === "green").length;
        return (greenItems / items.length) * 100;
    };

    const [percentage, setPercentage] = useState(calculatePercentage());

    // Handle click on an item
    const handleClick = (index) => {
        setItemColors((prevColors) => {
            const newColors = prevColors.map((color, i) =>
                i === index ? (color === "red" ? "green" : "red") : color
            );
            // Save the updated colors to the cookie
            Cookies.set('itemColors', JSON.stringify(newColors), {
                expires: 365,
                sameSite: 'None', 
                secure: true
            });
            return newColors;
        });
    };

    // Update the percentage whenever itemColors change
    useEffect(() => {
        setPercentage(calculatePercentage());
    }, [itemColors]);

    return (
        <div className="achievement-container">
            <h1>Achievement List</h1>
            <div className="percentage">
                <h1>Progress: {percentage.toFixed(0)}%</h1>
            </div>
            <ul className="achievement-list">
                {items.map((item, index) => (
                    <li
                        key={item.id}
                        className={`achievement-item ${itemColors[index]}`}
                        onClick={() => handleClick(index)}
                    >
                        {item.name} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
