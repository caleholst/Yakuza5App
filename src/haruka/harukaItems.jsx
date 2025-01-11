// harukaItems.jsx
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

    { id: 6, name: 'The Road to Fame', description: 'Haruka\'s Side Story', children: [
      { id: 2.1, name: 'Dance Battle Stories', descriptions: [
        { id: 1, text: 'The first Dance Battle Story is completed during the main story, when you run into Akari.' },
        { id: 2, text: 'The second Dance Battle Story will happen automatically while looking for Christina.' },
        { id: 3, text: 'The third Dance Battle Story will be available when Akari texts you. Go to the Sotenbori footpath behind Zuboraya.' },
        { id: 4, text: 'The fourth story will be available when you get another call about it. Go to the Bunzaemon Outdoor Mall to find your next opponent. ' },
        { id: 5, text: 'The fifth story occurs in the southwest corner of the map, in the parking lot with the lockers. Walk into the middle of the parking lot and the event will trigger.' },
        { id: 6, text: 'The final story is at the event hall to the southeast of Iwao Bridge, which you\'ll be able to access once Chapter 4 of Part 3 starts.' },

      ],
      },
      { id: 2.2, name: 'Job Missions', descriptions: [
        { id: 1, text: 'Idol Handshake Event in Sotenbori 1' },
        { id: 2, text: 'Idol Handshake Event in Sotenbori 2' },
        { id: 3, text: 'PrintCircle with an Idol' },
        { id: 4, text: 'An Idol Comes to Sotenbori 1' },
        { id: 5, text: 'An Idol Comes to Sotenbori 2' },
        { id: 6, text: 'An Idol Comes to Sotenbori 3' },
        { id: 7, text: 'An Idol Comes to Sotenbori 4' },
        { id: 8, text: 'An Idol Comes to Sotenbori 5' },
        { id: 9, text: 'Dancing with an Idol in Sotenbori 1' },
        { id: 10, text: 'Dancing with an Idol in Sotenbori 2' },
        { id: 11, text: 'Running Girl, Episode 1' },
        { id: 12, text: 'Running Girl, Episode 2' },
        { id: 13, text: 'Running Girl, Episode 3' },
        { id: 14, text: 'Running Girl, Episode 4' },
        { id: 15, text: 'Running Girl, Episode 5' },
        { id: 16, text: 'Refuse to Lose: Pool' },
        { id: 17, text: 'Refuse to Lose: Bowling' },
        { id: 18, text: 'Refuse to Lose: Darts' },
        { id: 19, text: 'Refuse to Lose: Air Hockey' },
        { id: 20, text: 'Fishing Fever, Osaka Edition' },
        { id: 21, text: 'Catcher Challenge' },
        { id: 22, text: 'Love to See You Smile 1' },
        { id: 23, text: 'Love to See You Smile 2' },
        { id: 24, text: 'Love to See You Smile 3' },
        { id: 25, text: 'Love to See You Smile 4' },
        { id: 26, text: 'Love to See you Smile 5' },
        { id: 27, text: 'Sotenbori Love Check Quiz (Normal)' },
        { id: 28, text: 'Sotenbori Love Check Quiz (Hard)' },
        { id: 29, text: 'Sotenbori Love Check Quiz Special 1' },
        { id: 30, text: 'Sotenbori Love Check Quiz Special 2' },
        { id: 31, text: 'Magazine Handshake Event 1' },
        { id: 32, text: 'Magazine Handshake Event 2' },
        { id: 33, text: 'Soten Town Haruka Mini-Concert 1' },
        { id: 34, text: 'Soten Town Haruka Mini-Concert 2' },
        { id: 35, text: 'Soten Town Haruka Jazz Dance Event' },
        { id: 36, text: 'Kiss Kiss Interview' },
        { id: 37, text: 'TV Smash Interview' },
        { id: 38, text: 'Beginner Interview' },
        { id: 39, text: 'Sensual Gentleman Interview' },
        { id: 40, text: 'Gossip Gals Interview' },
        { id: 41, text: 'Handshake Event in Sotenbori 1' },
        { id: 42, text: 'Handshake Event in Sotenbori 2' },
        { id: 43, text: 'Handshake Event in Sotenbori 3' },
        { id: 44, text: 'Concert Event in Sotenbori 1' },
        { id: 45, text: 'Concert Event in Sotenbori 2' },
        { id: 46, text: 'Concert Event in Sotenbori 3' },
        { id: 47, text: 'Dancing All Night in Sotenbori 1' },
        { id: 48, text: 'Dancing All Night in Sotenbori 2' }
      ],
      }
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
  