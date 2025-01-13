import React, { useState, useEffect } from 'react';
import items from './achievementItems'; 
import './Home.css';

const Home = () => {
    // State to track colors for each item
    const [itemColors, setItemColors] = useState(
        items.map(() => "red")
    );
    
    // Calculate the percentage of green items
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
                <p>Progress: {percentage.toFixed(2)}%</p>
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
