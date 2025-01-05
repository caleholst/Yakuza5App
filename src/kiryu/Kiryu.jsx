import React, { useState } from 'react';
import './kiryu.css'; 

const Kiryu = () => {
  const [openedItems, setOpenedItems] = useState({});

  const items = [
    { id: 1, name: 'Restaurants', description: 'All the Restaurants in Kiryu\'s area Nagasugai', children: [
      { id: 1.1, name: 'Hakataso'},
      { id: 1.2, name: 'Sub-item 1.2', description: 'Description of Sub-item 1.2' }
    ] },
    { id: 2, name: 'Hostesses', description: 'Description of Item 2', children: [
      { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },
    { id: 3, name: 'Minigames', description: 'Description of Item 3', children: [

    ] },
    { id: 4, name: 'Tourist Spots', description: 'Description of Item 2', children: [
        { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
      ] },
    { id: 5, name: 'Substories', description: 'Description of Item 2', children: [
        { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },
    { id: 6, name: 'Taxi Driver', description: 'Description of Item 2', children: [
        { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },
    { id: 7, name: 'Masters', description: 'Description of Item 2', children: [
        { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },
    { id: 8, name: 'Coliseum', description: 'Description of Item 2', children: [
        { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },
    { id: 9, name: 'Revelations', description: 'Description of Item 2', children: [
        { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },
    { id: 10, name: 'IF8R', description: 'Description of Item 2', children: [
        { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },
  ];

  // Toggle the open state for each item
  const handleClick = (id) => {
    setOpenedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Toggle open/close for the clicked item
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
    <div className="kiryu-container">
      <h1 className="title">Kiryu</h1>
      <ul className="main-list">
        {renderItems(items)} {/* Render the main list */}
      </ul>
    </div>
  );
};

export default Kiryu;
