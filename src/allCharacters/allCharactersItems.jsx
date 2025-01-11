// allCharactersItems.jsx
const items = [
    { id: 1, name: 'Restaurants', description: "All the Restaurants in Kiryu's area Nagasugai", children: [
      { id: 1.1, name: 'Hakataso' },
      { id: 1.2, name: 'Sub-item 1.2', description: 'Description of Sub-item 1.2' }
    ] },

    { id: 2, name: 'Minigames', description: 'Description of Item 3', children: [] },
    
    { id: 3, name: 'Tourist Spots', description: 'Description of Item 2', children: [
      { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] }

  ];
  
  export default items;
  