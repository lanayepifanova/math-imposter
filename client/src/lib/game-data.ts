export type Category = 'Objects' | 'Science' | 'Animals' | 'Places';

export interface GameState {
  step: 'setup' | 'category-select' | 'roles' | 'start-player' | 'play' | 'vote' | 'result';
  players: number;
  playerNames: string[];
  imposters: number;
  category: string | null;
  secretWord: string;
  hintWord: string;
  playerRoles: Role[];
  currentPlayerIndex: number;
  startingPlayerIndex: number | null;
  votes: Record<number, number>; // playerIndex -> votes received
  winner: 'crew' | 'imposter' | null;
}

export type Role = 'crew' | 'imposter';

export const MIN_PLAYERS = 3;
export const MAX_PLAYERS = 12;

export const CATEGORIES: Category[] = [
  'Objects',
  'Science',
  'Animals',
  'Places'
];

export interface CategoryStyle {
  bgClass: string;
  bgHoverClass: string;
  textClass: string;
}

export const CATEGORY_STYLES: Record<Category, CategoryStyle> = {
  Objects: {
    bgClass: 'bg-[var(--category-objects)]/10',
    bgHoverClass: 'group-hover:bg-[var(--category-objects)]/20',
    textClass: 'text-[var(--category-objects)]'
  },
  Science: {
    bgClass: 'bg-[var(--category-science)]/10',
    bgHoverClass: 'group-hover:bg-[var(--category-science)]/20',
    textClass: 'text-[var(--category-science)]'
  },
  Animals: {
    bgClass: 'bg-[var(--category-animals)]/10',
    bgHoverClass: 'group-hover:bg-[var(--category-animals)]/20',
    textClass: 'text-[var(--category-animals)]'
  },
  Places: {
    bgClass: 'bg-[var(--category-places)]/10',
    bgHoverClass: 'group-hover:bg-[var(--category-places)]/20',
    textClass: 'text-[var(--category-places)]'
  }
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  Objects: 'Everyday Items • Tools • Furniture',
  Science: 'Math • Physics • Earth',
  Animals: 'Wildlife • Pets • Creatures',
  Places: 'Landmarks • Destinations • Spots'
};

export const CATEGORY_IMAGE_ICONS: Partial<Record<Category, string>> = {
  Objects: '/images/icon_objects_pastel.png',
  Science: '/images/icon_chemistry_pastel.png'
};

export const WORDS: Record<Category, string[]> = {
  Science: [
    "Physics", "Chemistry", "Biology", "Astronomy", "Geology",
    "Ecology", "Meteorology", "Genetics", "Evolution", "Cell",
    "DNA", "Atom", "Molecule", "Element", "Periodic Table",
    "Compound", "Mixture", "Acid", "Base", "pH",
    "Energy", "Kinetic Energy", "Potential Energy", "Gravity", "Mass",
    "Force", "Motion", "Speed", "Velocity", "Acceleration",
    "Friction", "Momentum", "Electricity", "Magnet", "Magnetism",
    "Circuit", "Current", "Voltage", "Battery", "Light",
    "Sound", "Wave", "Heat", "Temperature", "Pressure",
    "Gas", "Liquid", "Solid", "Evaporation", "Condensation",
    "Freezing", "Melting", "Photosynthesis", "Respiration", "Oxygen",
    "Carbon Dioxide", "Water Cycle", "Ecosystem", "Food Chain", "Planet",
    "Star", "Sun", "Moon", "Solar System", "Galaxy",
    "Telescope", "Microscope", "Bacteria", "Virus", "Immune System",
    "Digestive System", "Nervous System", "Brain", "Heart", "Blood",
    "Bones", "Muscle", "Plant", "Seed", "Pollination",
    "Lab", "Experiment", "Hypothesis", "Data", "Measurement",
    "Graph", "Average", "Probability", "Statistics", "Algebra",
    "Geometry", "Equation", "Variable", "Fraction", "Decimal",
    "Percent", "Ratio", "Proportion", "Square Root", "Prime Number",
    "Pi", "Computer Science", "Programming", "Algorithm", "Robotics"
  ],
  Objects: [
    "Chair", "Table", "Desk", "Sofa", "Bed", 
    "Lamp", "Mirror", "Clock", "Watch", "Phone", 
    "Laptop", "Tablet", "Camera", "Television", "Radio", 
    "Speaker", "Headphone", "Microphone", "Guitar", "Piano", 
    "Violin", "Drum", "Flute", "Trumpet", "Book", 
    "Pen", "Pencil", "Eraser", "Ruler", "Scissors", 
    "Stapler", "Paper", "Notebook", "Envelope", "Stamp", 
    "Key", "Lock", "Door", "Window", "Wall", 
    "Floor", "Ceiling", "Roof", "Chimney", "Fence", 
    "Gate", "Garden", "Tree", "Flower", "Grass", 
    "Leaf", "Rock", "Stone", "Sand", "Water", 
    "Fire", "Ice", "Snow", "Rain", "Cloud", 
    "Sun", "Moon", "Star", "Planet", "Car", 
    "Bus", "Train", "Plane", "Boat", "Ship", 
    "Bike", "Scooter", "Skateboard", "Helmet", "Glove", 
    "Hat", "Shoe", "Sock", "Shirt", "Pants", 
    "Dress", "Coat", "Jacket", "Scarf", "Belt", 
    "Bag", "Wallet", "Purse", "Money", "Coin", 
    "Card", "Ticket", "Passport", "Map", "Compass", 
    "Flag", "Banner", "Sign", "Poster", "Picture", 
    "Painting", "Statue", "Toy", "Doll", "Ball", 
    "Smartwatch", "Drone", "VR Headset", "Game Console", "Controller", 
    "Joystick", "Projector", "Whiteboard", "Marker", "Chalk", 
    "3D Printer", "Telescope", "Microscope", "Binoculars", "Flashlight", 
    "Backpack", "Suitcase", "Luggage Tag", "Umbrella", "Raincoat", 
    "Sunglasses", "Refrigerator", "Oven", "Microwave Oven", "Dishwasher", 
    "Washing Machine", "Dryer", "Vacuum", "Air Conditioner", "Heater", 
    "Thermostat", "Bicycle Pump", "Helmet Light", "Toolbox", "Measuring Tape", 
    "Mug", "Plate", "Bowl", "Fork", "Spoon", 
    "Knife", "Chopsticks", "Pan", "Pot", "Kettle", 
    "Toaster", "Blender", "Mixer", "Cutting Board", "Spatula", 
    "Ladle", "Whisk", "Measuring Cup", "Measuring Spoon", "Strainer", 
    "Colander", "Lunchbox", "Thermos", "Water Bottle", "Cooler", 
    "Ice Tray", "Trash Can", "Recycling Bin", "Broom", "Mop", 
    "Bucket", "Sponge", "Scrub Brush", "Dustpan", "Detergent Bottle", 
    "Soap Dispenser", "Towel", "Napkin", "Tissue", "Toothbrush", 
    "Toothpaste", "Floss", "Shampoo", "Conditioner", "Comb", 
    "Hair Dryer", "Razor", "Lotion", "Sunscreen", "Deodorant", 
    "Nail Clipper", "Hand Mirror", "Hair Tie", "Lunch Bag", "Pencil Case", 
    "Calculator", "Binder", "Folder", "Highlighter", "Glue Stick", 
    "Tape", "Staple Remover", "Push Pin", "Paper Clip", "Clipboard", 
    "Whiteboard Eraser", "Chalkboard", "Bulletin Board", "Calendar", "Alarm Clock", 
    "Nightstand", "Dresser", "Closet", "Hanger", "Laundry Basket", 
    "Clothesline", "Iron", "Ironing Board", "Sewing Kit", "Needle", 
    "Thread", "Button", "Safety Pin", "Tailor's Chalk", "Fabric Scissors", 
    "Yarn", "Knitting Needle", "Paint Brush", "Paint Roller", "Easel", 
    "Canvas", "Palette", "Craft Glue", "Extension Cord", "Power Strip", 
    "Surge Protector", "Battery", "Flash Drive", "Hard Drive", "Router", 
    "Ethernet Cable", "Mouse", "Keyboard", "Mouse Pad", "Monitor", 
    "Printer", "Scanner", "Copier", "Shredder", "Filing Cabinet",
    "Truck", "Taxi", "Van",
    "Helicopter", "Motorcycle", "Sailboat", "Tractor", "Submarine",
    "Jeep", "Limousine", "Hot Air Balloon", "Rocket",
    "Segway", "Monorail", "Rickshaw", "Gondola", "Hovercraft",
    "Cable Car", "Zeppelin", "Tuk Tuk", "Snowmobile", "Amphibious Vehicle",
    "Pizza", "Apple", "Bread", "Cake", "Ice Cream",
    "Banana", "Sandwich", "Milk", "Cookie", "Cheese",
    "Spaghetti", "Hamburger", "Popcorn", "Salad", "Muffin",
    "Taco", "Yogurt", "Cereal", "Peanut Butter", "Chicken",
    "Croissant", "Quiche", "Sushi", "Ravioli", "Guacamole",
    "Eggplant", "Avocado", "Falafel", "Pomegranate", "Wasabi"
  ],
  Animals: [
    "Dog", "Cat", "Horse", "Cow", "Sheep",
    "Goat", "Pig", "Rabbit", "Deer", "Fox",
    "Wolf", "Bear", "Lion", "Tiger", "Leopard",
    "Cheetah", "Elephant", "Giraffe", "Zebra", "Rhino",
    "Hippo", "Kangaroo", "Koala", "Panda", "Monkey",
    "Gorilla", "Chimpanzee", "Otter", "Seal", "Dolphin",
    "Whale", "Shark", "Octopus", "Penguin", "Eagle",
    "Hawk", "Owl", "Parrot", "Flamingo", "Peacock",
    "Turtle", "Snake", "Lizard", "Frog", "Crocodile",
    "Alligator", "Bee", "Butterfly", "Ant", "Ladybug",
    "Horsefly", "Moose", "Bison", "Camel", "Raccoon",
    "Dragon", "Fairy", "Wizard", "Giant", "Mermaid",
    "Troll", "Elf", "Unicorn", "Witch", "Knight",
    "Griffin", "Phoenix", "Centaur", "Minotaur", "Pegasus",
    "Cyclops", "Goblin", "Genie", "Werewolf", "Vampire",
    "Fish", "Duck", "Bird",
    "Armadillo", "Platypus", "Narwhal", "Chameleon", "Wombat",
    "Axolotl", "Sloth", "Tarantula", "Iguana", "Hedgehog"
  ],
  Places: [
    "School", "Park", "Beach", "Home", "Zoo",
    "Farm", "Playground", "Mall", "Hospital", "Library",
    "City Hall", "Stadium", "Airport", "Theater", "Aquarium",
    "Museum", "Restaurant", "Castle", "Mountain", "Bridge",
    "River", "Lake", "Forest", "Volcano", "Canyon",
    "Desert", "Jungle", "Waterfall", "Ocean", "Cave",
    "Island", "Pyramids", "Eiffel Tower", "Great Wall", "Taj Mahal",
    "Colosseum", "Statue of Liberty", "Mount Everest", "Grand Canyon", "Golden Gate Bridge",
    "United States", "Canada", "Mexico", "Brazil", "United Kingdom",
    "France", "Germany", "Italy", "Spain", "Japan",
    "China", "India", "Australia", "New York", "Los Angeles",
    "Chicago", "London", "Paris", "Rome", "Tokyo"
  ],
};

export interface HintGroup {
  hint: string;
  words: string[];
}

export const HINT_GROUPS: Record<Category, HintGroup[]> = {
  Animals: [
    {
      hint: 'feathers',
      words: ['Penguin', 'Eagle', 'Hawk', 'Owl', 'Parrot', 'Flamingo', 'Peacock', 'Duck', 'Bird'],
    },
    {
      hint: 'feline',
      words: ['Cat', 'Lion', 'Tiger', 'Leopard', 'Cheetah'],
    },
    {
      hint: 'canine',
      words: ['Dog', 'Wolf', 'Fox'],
    },
    {
      hint: 'hooves',
      words: ['Horse', 'Cow', 'Sheep', 'Goat', 'Pig', 'Deer', 'Moose', 'Bison', 'Camel'],
    },
    {
      hint: 'long neck',
      words: ['Giraffe'],
    },
    {
      hint: 'stripes',
      words: ['Zebra'],
    },
    {
      hint: 'trunk',
      words: ['Elephant'],
    },
    {
      hint: 'horn',
      words: ['Rhino'],
    },
    {
      hint: 'river',
      words: ['Hippo'],
    },
    {
      hint: 'pouch',
      words: ['Kangaroo', 'Koala', 'Wombat'],
    },
    {
      hint: 'primate',
      words: ['Monkey', 'Gorilla', 'Chimpanzee'],
    },
    {
      hint: 'bear',
      words: ['Bear', 'Panda'],
    },
    {
      hint: 'burrow',
      words: ['Rabbit'],
    },
    {
      hint: 'masked',
      words: ['Raccoon'],
    },
    {
      hint: 'armor',
      words: ['Armadillo'],
    },
    {
      hint: 'bill',
      words: ['Platypus'],
    },
    {
      hint: 'ocean',
      words: ['Otter', 'Seal', 'Dolphin', 'Whale', 'Shark', 'Octopus', 'Fish', 'Narwhal'],
    },
    {
      hint: 'scutes',
      words: ['Turtle'],
    },
    {
      hint: 'scales',
      words: ['Snake', 'Lizard', 'Crocodile', 'Alligator', 'Chameleon', 'Iguana'],
    },
    {
      hint: 'pond',
      words: ['Frog', 'Axolotl'],
    },
    {
      hint: 'antennae',
      words: ['Bee', 'Butterfly', 'Ant', 'Ladybug', 'Horsefly'],
    },
    {
      hint: 'web',
      words: ['Tarantula'],
    },
    {
      hint: 'slow',
      words: ['Sloth'],
    },
    {
      hint: 'spines',
      words: ['Hedgehog'],
    },
    {
      hint: 'legend',
      words: [
        'Dragon', 'Fairy', 'Wizard', 'Giant', 'Mermaid', 'Troll', 'Elf', 'Unicorn', 'Witch', 'Knight',
        'Griffin', 'Phoenix', 'Centaur', 'Minotaur', 'Pegasus', 'Cyclops', 'Goblin', 'Genie',
        'Werewolf', 'Vampire',
      ],
    },
  ],
  Objects: [
    {
      hint: 'home',
      words: [
        'Chair', 'Table', 'Desk', 'Sofa', 'Bed', 'Lamp', 'Mirror', 'Clock', 'Door', 'Window', 'Wall',
        'Floor', 'Ceiling', 'Roof', 'Chimney', 'Fence', 'Gate', 'Nightstand', 'Dresser', 'Closet',
        'Hanger', 'Laundry Basket', 'Alarm Clock',
      ],
    },
    {
      hint: 'gadget',
      words: [
        'Phone', 'Laptop', 'Tablet', 'Camera', 'Television', 'Radio', 'Speaker', 'Headphone',
        'Microphone', 'Smartwatch', 'Drone', 'VR Headset', 'Game Console', 'Controller', 'Joystick',
        'Projector', '3D Printer', 'Telescope', 'Microscope', 'Binoculars', 'Flash Drive', 'Hard Drive',
        'Router', 'Ethernet Cable', 'Mouse', 'Keyboard', 'Mouse Pad', 'Monitor', 'Printer', 'Scanner',
        'Copier', 'Shredder',
      ],
    },
    {
      hint: 'music',
      words: ['Guitar', 'Piano', 'Violin', 'Drum', 'Flute', 'Trumpet'],
    },
    {
      hint: 'school',
      words: [
        'Book', 'Pen', 'Pencil', 'Eraser', 'Ruler', 'Scissors', 'Stapler', 'Paper', 'Notebook',
        'Envelope', 'Stamp', 'Whiteboard', 'Marker', 'Chalk', 'Pencil Case', 'Calculator', 'Binder',
        'Folder', 'Highlighter', 'Glue Stick', 'Tape', 'Staple Remover', 'Push Pin', 'Paper Clip',
        'Clipboard', 'Whiteboard Eraser', 'Chalkboard', 'Bulletin Board', 'Calendar', 'Filing Cabinet',
      ],
    },
    {
      hint: 'decor',
      words: ['Flag', 'Banner', 'Sign', 'Poster', 'Picture', 'Painting', 'Statue'],
    },
    {
      hint: 'nature',
      words: [
        'Garden', 'Tree', 'Flower', 'Grass', 'Leaf', 'Rock', 'Stone', 'Sand', 'Water', 'Fire', 'Ice',
        'Snow', 'Rain', 'Cloud', 'Sun', 'Moon', 'Star', 'Planet',
      ],
    },
    {
      hint: 'travel',
      words: [
        'Car', 'Bus', 'Train', 'Plane', 'Boat', 'Ship', 'Bike', 'Scooter', 'Skateboard', 'Truck', 'Taxi',
        'Van', 'Helicopter', 'Motorcycle', 'Sailboat', 'Tractor', 'Submarine', 'Jeep', 'Limousine',
        'Hot Air Balloon', 'Rocket', 'Segway', 'Monorail', 'Rickshaw', 'Gondola', 'Hovercraft',
        'Cable Car', 'Zeppelin', 'Tuk Tuk', 'Snowmobile', 'Amphibious Vehicle',
      ],
    },
    {
      hint: 'clothing',
      words: [
        'Helmet', 'Glove', 'Hat', 'Shoe', 'Sock', 'Shirt', 'Pants', 'Dress', 'Coat', 'Jacket', 'Scarf',
        'Belt', 'Bag', 'Sunglasses',
      ],
    },
    {
      hint: 'pocket',
      words: ['Watch', 'Wallet', 'Purse', 'Money', 'Coin', 'Card', 'Key'],
    },
    {
      hint: 'trip',
      words: [
        'Ticket', 'Passport', 'Map', 'Compass', 'Backpack', 'Suitcase', 'Luggage Tag', 'Umbrella',
        'Raincoat',
      ],
    },
    {
      hint: 'kitchen',
      words: [
        'Mug', 'Plate', 'Bowl', 'Fork', 'Spoon', 'Knife', 'Chopsticks', 'Pan', 'Pot', 'Kettle',
        'Toaster', 'Blender', 'Mixer', 'Cutting Board', 'Spatula', 'Ladle', 'Whisk', 'Measuring Cup',
        'Measuring Spoon', 'Strainer', 'Colander', 'Lunchbox', 'Thermos', 'Water Bottle', 'Cooler',
        'Ice Tray', 'Lunch Bag', 'Napkin',
      ],
    },
    {
      hint: 'appliance',
      words: [
        'Refrigerator', 'Oven', 'Microwave Oven', 'Dishwasher', 'Air Conditioner', 'Heater',
        'Thermostat',
      ],
    },
    {
      hint: 'cleaning',
      words: [
        'Washing Machine', 'Dryer', 'Vacuum', 'Trash Can', 'Recycling Bin', 'Broom', 'Mop', 'Bucket',
        'Sponge', 'Scrub Brush', 'Dustpan', 'Detergent Bottle', 'Soap Dispenser', 'Clothesline',
        'Iron', 'Ironing Board',
      ],
    },
    {
      hint: 'hygiene',
      words: [
        'Towel', 'Tissue', 'Toothbrush', 'Toothpaste', 'Floss', 'Shampoo', 'Conditioner', 'Comb',
        'Hair Dryer', 'Razor', 'Lotion', 'Sunscreen', 'Deodorant', 'Nail Clipper', 'Hand Mirror',
        'Hair Tie',
      ],
    },
    {
      hint: 'tool',
      words: [
        'Toolbox', 'Measuring Tape', 'Extension Cord', 'Power Strip', 'Surge Protector', 'Battery',
        'Bicycle Pump', 'Helmet Light', 'Flashlight', 'Lock',
      ],
    },
    {
      hint: 'craft',
      words: [
        'Sewing Kit', 'Needle', 'Thread', 'Button', 'Safety Pin', "Tailor's Chalk", 'Fabric Scissors',
        'Yarn', 'Knitting Needle', 'Paint Brush', 'Paint Roller', 'Easel', 'Canvas', 'Palette',
        'Craft Glue',
      ],
    },
    {
      hint: 'toy',
      words: ['Toy', 'Doll', 'Ball'],
    },
    {
      hint: 'food',
      words: [
        'Pizza', 'Apple', 'Bread', 'Cake', 'Ice Cream', 'Banana', 'Sandwich', 'Milk', 'Cookie',
        'Cheese', 'Spaghetti', 'Hamburger', 'Popcorn', 'Salad', 'Muffin', 'Taco', 'Yogurt', 'Cereal',
        'Peanut Butter', 'Chicken', 'Croissant', 'Quiche', 'Sushi', 'Ravioli', 'Guacamole', 'Eggplant',
        'Avocado', 'Falafel', 'Pomegranate', 'Wasabi',
      ],
    },
  ],
  Science: [
    {
      hint: 'motion',
      words: [
        'Physics', 'Energy', 'Kinetic Energy', 'Potential Energy', 'Gravity', 'Mass', 'Force', 'Motion',
        'Speed', 'Velocity', 'Acceleration', 'Friction', 'Momentum', 'Electricity', 'Magnet',
        'Magnetism', 'Circuit', 'Current', 'Voltage', 'Battery', 'Light', 'Sound', 'Wave', 'Heat',
        'Temperature', 'Pressure',
      ],
    },
    {
      hint: 'reaction',
      words: [
        'Chemistry', 'Atom', 'Molecule', 'Element', 'Periodic Table', 'Compound', 'Mixture', 'Acid',
        'Base', 'pH', 'Gas', 'Liquid', 'Solid', 'Melting',
      ],
    },
    {
      hint: 'life',
      words: [
        'Biology', 'Ecology', 'Genetics', 'Evolution', 'Cell', 'DNA', 'Photosynthesis', 'Respiration',
        'Oxygen', 'Carbon Dioxide', 'Ecosystem', 'Food Chain', 'Microscope', 'Bacteria', 'Virus',
        'Immune System', 'Digestive System', 'Nervous System', 'Brain', 'Heart', 'Blood', 'Bones',
        'Muscle', 'Plant', 'Seed', 'Pollination',
      ],
    },
    {
      hint: 'weather',
      words: [
        'Geology', 'Meteorology', 'Evaporation', 'Condensation', 'Freezing', 'Water Cycle',
      ],
    },
    {
      hint: 'space',
      words: [
        'Astronomy', 'Planet', 'Star', 'Sun', 'Moon', 'Solar System', 'Galaxy', 'Telescope',
      ],
    },
    {
      hint: 'data',
      words: [
        'Lab', 'Experiment', 'Hypothesis', 'Data', 'Measurement', 'Graph', 'Average', 'Probability',
        'Statistics',
      ],
    },
    {
      hint: 'math',
      words: [
        'Algebra', 'Geometry', 'Equation', 'Variable', 'Fraction', 'Decimal', 'Percent', 'Ratio',
        'Proportion', 'Square Root', 'Prime Number', 'Pi',
      ],
    },
    {
      hint: 'coding',
      words: ['Computer Science', 'Programming', 'Algorithm', 'Robotics'],
    },
  ],
  Places: [
    {
      hint: 'building',
      words: [
        'School', 'Home', 'Zoo', 'Farm', 'Playground', 'Mall', 'Hospital', 'Library', 'City Hall',
        'Stadium', 'Airport', 'Theater', 'Aquarium', 'Museum', 'Restaurant', 'Castle', 'Bridge',
      ],
    },
    {
      hint: 'outdoors',
      words: [
        'Park', 'Beach', 'Mountain', 'River', 'Lake', 'Forest', 'Volcano', 'Canyon', 'Desert', 'Jungle',
        'Waterfall', 'Ocean', 'Cave', 'Island',
      ],
    },
    {
      hint: 'landmark',
      words: [
        'Pyramids', 'Eiffel Tower', 'Great Wall', 'Taj Mahal', 'Colosseum', 'Statue of Liberty',
        'Mount Everest', 'Grand Canyon', 'Golden Gate Bridge',
      ],
    },
    {
      hint: 'country',
      words: [
        'United States', 'Canada', 'Mexico', 'Brazil', 'United Kingdom', 'France', 'Germany', 'Italy',
        'Spain', 'Japan', 'China', 'India', 'Australia',
      ],
    },
    {
      hint: 'city',
      words: ['New York', 'Los Angeles', 'Chicago', 'London', 'Paris', 'Rome', 'Tokyo'],
    },
  ],
};

const FALLBACK_HINT = 'related';

const stableHash = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const pickDeterministic = (options: string[], seed: string) => {
  if (!options.length) return FALLBACK_HINT;
  const index = stableHash(seed) % options.length;
  return options[index];
};

export const WORD_HINTS: Record<Category, Record<string, string>> = Object.fromEntries(
  Object.entries(HINT_GROUPS).map(([category, groups]) => {
    const hintMap: Record<string, string> = {};
    groups.forEach(group => {
      group.words.forEach(word => {
        hintMap[word] = group.hint;
      });
    });
    return [category, hintMap];
  })
) as Record<Category, Record<string, string>>;

export const getHintWord = (
  category: string,
  secretWord: string,
  wordList: string[]
): string => {
  const hintMap = (WORD_HINTS as Record<string, Record<string, string>>)[category];
  if (hintMap?.[secretWord]) {
    return hintMap[secretWord];
  }

  const fallbackOptions = wordList.filter(word => word !== secretWord);
  if (fallbackOptions.length) {
    return pickDeterministic(fallbackOptions, secretWord);
  }

  return FALLBACK_HINT;
};
