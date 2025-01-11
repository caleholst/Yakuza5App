import React, { useState } from 'react';
import '../Characters.css';
import items from './shinadaItems'; 

const Shinada = () => {
  const [openedItems, setOpenedItems] = useState({});

  // Toggle the open state for each item
  const handleClick = (id) => {
    setOpenedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle open/close for the clicked item
    }));
  };

  const renderItemDescription = (item) => {
    if (item.description) {
      // Single description (string)
      return <p className="item-description">{item.description}</p>;
    } else if (item.descriptions && Array.isArray(item.descriptions)) {
      // Multiple descriptions (array of objects)
      return (
        <div className="item-descriptions">
          {item.descriptions.map((desc) => (
            <p key={desc.id} className="item-description">{desc.text}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderItems = (items) => {
    return items.map((item) => (
      <li key={item.id} className="list-item">
        <div onClick={() => handleClick(item.id)} className="item-header">
          <strong>{item.name}</strong>
        </div>
        {openedItems[item.id] && (
          <>
            {renderItemDescription(item)} {/* Render the descriptions */}
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
      <h1 className="title">Shinada</h1>
      <ul className="main-list">
        {renderItems(items)} {/* Render the main list */}
      </ul>
    </div>
  );
};

export default Shinada;
