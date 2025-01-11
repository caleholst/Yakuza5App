// saejimaItems.jsx
const items = [
    { id: 1, name: 'Restaurants', description: "All the Restaurants in Kiryu's area Nagasugai", children: [
      { id: 1.1, name: 'Hakataso' },
      { id: 1.2, name: 'Sub-item 1.2', description: 'Description of Sub-item 1.2' }
    ] },

    { id: 2, name: 'Hostesses', description: 'Description of Item 2', children: [
      { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },

    { id: 3, name: 'Minigames', description: 'Description of Item 3', children: [] },
    { id: 4, name: 'Tourist Spots', description: 'Description of Item 2', children: [
      { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },

    { id: 5, name: 'Substories', description: 'Description of Item 2', children: [
      { id: 2.1, name: 'Sub-item 2.1', description: 'Description of Sub-item 2.1' },
    ] },

    { id: 6, name: 'Hunter and Killer', description: 'Saejima\'s Side Story', children: [
      { id: 2.1, name: 'Main Missions', descriptions: [
        { id: 1, text: 'First Mission' },
        { id: 2, text: 'Hunter Lesson' },
        { id: 3, text: 'Creeping Terror' },
        { id: 4, text: 'White Darkness' },
        { id: 5, text: 'The Third Man' },
        { id: 6, text: 'Kill or Die' },
        { id: 7, text: 'Hubris' },
        { id: 8, text: 'Pride\'s Toll' },
        { id: 9, text: 'Tag the Beast' },
        { id: 10, text: 'Okudera\'s Escort' },
        { id: 11, text: 'Snowmobile Mission' },
        { id: 12, text: 'Principles' },
      ],
      },
      { id: 2.2, name: 'Contract Missions', descriptions: [
        { id: 1, text: 'Get Marten Pelts' },
        { id: 2, text: 'Supply the Trader' },
        { id: 3, text: 'Pray to Jizo Statues' },
        { id: 4, text: 'Find the Time Capsule' },
        { id: 5, text: 'Get an Antler' },
        { id: 6, text: 'Get Bear Meat' },
        { id: 7, text: 'Get Rabbit Meat' },
        { id: 8, text: 'Get Some Bear Fat' },
        { id: 9, text: 'Get Toxic Shrooms' },
        { id: 10, text: 'Hunt the Gold Stag' },
        { id: 11, text: 'The Outsider' },
        { id: 12, text: 'Hunter\'s Test' },
        { id: 13, text: 'Trapper\'s Pride' },
        { id: 14, text: 'Chase the Snowman' },
        { id: 15, text: 'Get a Bear Skin' },
        { id: 16, text: 'Sell a Marten Pelt' },
        { id: 17, text: 'Sell a Fox Skin' },
        { id: 18, text: 'Sell Deer Meat' },
        { id: 19, text: 'Sell a Whole Deer' },
        { id: 20, text: 'Sell a Whole Bear' }
      ],
      },
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
  
  export default items;
  