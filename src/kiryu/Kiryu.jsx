import React, { useState } from 'react';
import '../Characters.css';
import items from './kiryuItems'; // Import the items array

const Kiryu = () => {
  const [openedItems, setOpenedItems] = useState({});

  // Toggle the open state for each item
  const handleClick = (id) => {
    setOpenedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle open/close for the clicked item
    }));
  };

  const renderItems = (items) => {
    return items.map((item) => (
      <li key={item.id} className="list-item">
        <div onClick={() => handleClick(item.id)} className="item-header">
          <strong>{item.name}</strong>
        </div>
        {openedItems[item.id] && (
          <>
            <p className="item-description">{item.description}</p>
            {item.children && item.children.length > 0 && (
              <ul className="nested-list">
                {renderItems(item.children)} {/* Recursive rendering of child items */}
              </ul>
            )}
          </>
        )}
      </li>
    ));
  };

  return (
    <div className="characters-container">
      <h1 className="title">Kiryu</h1>
      <ul className="main-list">
        {renderItems(items)} {/* Render the main list */}
      </ul>
    </div>
  );
};

export default Kiryu;
