export const categories = [
  { id: "all", name: "All Categories" },
  { id: "poke-bowls", name: "Poke Bowls" },
  { id: "bibimbap", name: "Bibimbap" },
  { id: "fries-hotdogs", name: "Fries & Hotdogs" },
  { id: "juice-smoothies", name: "Juice & Smoothies" }
];

export const products = [
  {
    id: 50,
    name: "Classic Hawaiian Poke Bowl",
    category: "poke-bowls",
    price: 650,
    photo: "Hawaiian Poke(5).jpg",
    description: "The finest ingredients from land and sea, serving them up Hawaii-style, as fresh and wholesome bowls. Tossed with seasoned raw tuna or salmon, sesame oil, soy sauce, green onions, and fresh avocado.",
    sizes: [
      { id: "reg", name: "Regular Size", price: 650 },
      { id: "lrg", name: "Large Size", price: 850 }
    ],
    addons: [
      { id: "addon-crab", name: "Crab Stick", price: 60, image: "Crab-Stick.png" },
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" },
      { id: "addon-soba", name: "Soba Noodles", price: 80, image: "Soba-Noodles.png" },
      { id: "addon-cuc", name: "Crispy Cucumber", price: 30, image: "Cucumber.webp" }
    ],
    optionTitle: "Choose Base",
    options: ["Sushi Rice", "Brown Rice", "Salad Greens", "Soba Noodles"]
  },
  {
    id: 52,
    name: "Ahi Poke Classic Bowl",
    category: "poke-bowls",
    price: 700,
    photo: "Bibimbap2.jpg",
    description: "The original inspiration for Ahi Poké came following a road trip up the California coast. Made with fresh Ahi Tuna, sliced white onions, edamame, seaweed salad, and signature umami drizzle.",
    sizes: [
      { id: "reg", name: "Regular Size", price: 700 },
      { id: "lrg", name: "Large Size", price: 920 }
    ],
    addons: [
      { id: "addon-crab", name: "Crab Stick", price: 60, image: "Crab-Stick.png" },
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" },
      { id: "addon-tomato", name: "Cherry Tomatoes", price: 45, image: "cherry-tomato.webp" }
    ],
    optionTitle: "Choose Protein",
    options: ["Yellowfin Ahi Tuna", "Atlantic Salmon", "Poached Shrimp", "Crispy Organic Tofu"]
  },
  {
    id: 48,
    name: "Classic Beef Bibimbap",
    category: "bibimbap",
    price: 580,
    photo: "Bibimbap.jpg",
    description: "More traditional and authentic versions of Bibimbap are made with marinated beef and egg yolk along with seasoned sautéed spinach, carrots, bean sprouts, and shiitake mushrooms over rice.",
    sizes: [
      { id: "reg", name: "Standard Portion", price: 580 }
    ],
    addons: [
      { id: "addon-kimchi", name: "Spicy Kimchi", price: 50, image: "kimchi.png" },
      { id: "addon-egg", name: "Extra Fried Egg", price: 30, image: "white.webp" },
      { id: "addon-mushroom", name: "Enoki Mushrooms", price: 60, image: "Enoki-Mushroom.webp" }
    ],
    optionTitle: "Choose Egg Prep",
    options: ["Sunny Side Up", "Fully Fried Egg", "Traditional Raw Yolk"]
  },
  {
    id: 49,
    name: "The Hot Chick Poke Bowl",
    category: "poke-bowls",
    price: 620,
    photo: "The Hot Chick.jpg",
    description: "Tender chunks of chicken breast glazed in a sweet-and-spicy Hawaiian BBQ marinade, paired with sliced mangoes, cucumber shreds, shredded cabbage, and toasted sesame seeds.",
    sizes: [
      { id: "reg", name: "Regular Size", price: 620 },
      { id: "lrg", name: "Large Size", price: 800 }
    ],
    addons: [
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" },
      { id: "addon-cuc", name: "Crispy Cucumber", price: 30, image: "Cucumber.webp" }
    ],
    optionTitle: "Choose Spice Level",
    options: ["Mild Soy Glaze", "Medium Heat Hawaiian", "Extra Spicy Gochujang"]
  },
  {
    id: 45,
    name: "Kona Animal Fries",
    category: "fries-hotdogs",
    price: 350,
    photo: "food-2.png",
    description: "Whether it’s Crunchy or Spicy, there’s a choice for everyone. Our fresh hand-cut fries are smothered in caramelized onions, melted cheddar cheese, and signature secret Kona Animal Sauce.",
    sizes: [
      { id: "reg", name: "Single Serving", price: 350 },
      { id: "lrg", name: "Sharing Bowl", price: 550 }
    ],
    addons: [
      { id: "addon-jalapeno", name: "Pickled Jalapeños", price: 40, image: "Cucumber.webp" },
      { id: "addon-bacon", name: "Beef Bacon Bits", price: 80, image: "white.webp" }
    ],
    optionTitle: "Sauce Option",
    options: ["Secret Animal Sauce", "Garlic Aioli", "Umami Ketchup"]
  },
  {
    id: 46,
    name: "Hawaiian Bun Hot Dog",
    category: "fries-hotdogs",
    price: 420,
    photo: "about11.png",
    description: "Treat for everyone! Premium flame-grilled jumbo sausage tucked inside our signature freshly-baked sweet Hawaiian bun, topped with grilled pineapples and garlic mayo.",
    sizes: [
      { id: "reg", name: "One Hotdog", price: 420 }
    ],
    addons: [
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" },
      { id: "addon-cheese", name: "Melted Cheddar Sauce", price: 50, image: "Garlic-Aioli.webp" }
    ],
    optionTitle: "Sausage Choice",
    options: ["Jumbo Beef Sausage", "Classic Chicken Sausage"]
  },
  {
    id: 40,
    name: "Lychee Rose Boba Tea",
    category: "juice-smoothies",
    price: 280,
    photo: "lycheerosetea.webp",
    description: "Twitch your day with our freshly brewed bubble tea. Premium jasmine rose green tea infused with lychee juice, loaded with chewy tapioca pearls and lychee popping boba.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 280 },
      { id: "lrg", name: "Tall Cup", price: 350 }
    ],
    addons: [
      { id: "addon-pearls", name: "Extra Tapioca Pearls", price: 40, image: "white.webp" },
      { id: "addon-popping", name: "Extra Lychee Popping Boba", price: 50, image: "lycheerosetea.webp" }
    ],
    optionTitle: "Sugar Level",
    options: ["100% Full Sugar", "70% Less Sweet", "50% Half Sugar", "0% Unsweetened"]
  },
  {
    id: 41,
    name: "Mango Paradise Smoothie",
    category: "juice-smoothies",
    price: 320,
    photo: "about-2.png",
    description: "Sweet, tangy and fresh, our mango smoothie will give you a lift. Blended with fresh ripe local mangoes, organic coconut milk, banana chunks, and crushed ice.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 320 }
    ],
    addons: [
      { id: "addon-boba", name: "Add Honey Boba Pearls", price: 40, image: "white.webp" }
    ],
    optionTitle: "Dairy Options",
    options: ["Coconut Milk (Vegan)", "Almond Milk", "Classic Condensed Sweet Milk"]
  },
  {
    id: 61,
    name: "Korean Bibimbap Bowl",
    category: "bibimbap",
    price: 620,
    photo: "1.png",
    description: "Authentic Korean Bibimbap bowl featuring seasoned beef, a sunny-side-up egg, spicy kimchi, shredded cabbage, seaweed flakes, and grilled sausage slices over a warm bed of rice.",
    sizes: [{ id: "reg", name: "Standard Portion", price: 620 }],
    addons: [
      { id: "addon-kimchi", name: "Spicy Kimchi", price: 50, image: "kimchi.png" },
      { id: "addon-egg", name: "Extra Fried Egg", price: 30, image: "white.webp" }
    ],
    optionTitle: "Choose Egg Prep",
    options: ["Sunny Side Up", "Fully Fried Egg", "Traditional Raw Yolk"]
  },
  {
    id: 62,
    name: "Citrus Avocado Poke Bowl",
    category: "poke-bowls",
    price: 680,
    photo: "2.png",
    description: "A refreshing poke bowl loaded with fresh tuna and salmon chunks, creamy diced avocado, shredded carrots, grapefruit sections, citrusy kumquat slices, fish roe, and fresh cilantro.",
    sizes: [
      { id: "reg", name: "Regular Size", price: 680 },
      { id: "lrg", name: "Large Size", price: 880 }
    ],
    addons: [
      { id: "addon-crab", name: "Crab Stick", price: 60, image: "Crab-Stick.png" },
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" }
    ],
    optionTitle: "Choose Base",
    options: ["Sushi Rice", "Brown Rice", "Salad Greens"]
  },
  {
    id: 63,
    name: "Tropical Salmon Poke Bowl",
    category: "poke-bowls",
    price: 720,
    photo: "3.png",
    description: "Delightful tropical fusion featuring fresh salmon, sweet mango cubes, crisp cucumber, avocado slices, kiwi, edamame beans, cherry tomatoes, and radish wheels.",
    sizes: [
      { id: "reg", name: "Regular Size", price: 720 },
      { id: "lrg", name: "Large Size", price: 920 }
    ],
    addons: [
      { id: "addon-crab", name: "Crab Stick", price: 60, image: "Crab-Stick.png" },
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" }
    ],
    optionTitle: "Choose Base",
    options: ["Sushi Rice", "Brown Rice", "Salad Greens"]
  },
  {
    id: 64,
    name: "Classic Ahi Poke Bowl",
    category: "poke-bowls",
    price: 700,
    photo: "4.png",
    description: "Traditional Ahi Poke bowl featuring fresh yellowfin tuna, Atlantic salmon, crisp cucumber, red onion, sweet mango, edamame, and vibrant fish roe over rice.",
    sizes: [
      { id: "reg", name: "Regular Size", price: 700 },
      { id: "lrg", name: "Large Size", price: 900 }
    ],
    addons: [
      { id: "addon-crab", name: "Crab Stick", price: 60, image: "Crab-Stick.png" },
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" }
    ],
    optionTitle: "Choose Base",
    options: ["Sushi Rice", "Brown Rice", "Salad Greens"]
  },
  {
    id: 65,
    name: "Spicy Penne Arrabbiata",
    category: "fries-hotdogs",
    price: 480,
    photo: "1.jpg",
    description: "Penne pasta tossed in a fiery, garlic-infused tomato sauce, garnished with fresh parsley and sweet cherry tomatoes.",
    sizes: [{ id: "reg", name: "Standard Portion", price: 480 }],
    addons: [
      { id: "addon-cheese", name: "Melted Cheddar Sauce", price: 50, image: "Garlic-Aioli.webp" }
    ],
    optionTitle: "Choose Spice Level",
    options: ["Mild", "Medium", "Extra Spicy"]
  },
  {
    id: 66,
    name: "Olive Garden Supreme Pizza",
    category: "fries-hotdogs",
    price: 550,
    photo: "2.jpg",
    description: "Freshly baked thin-crust pizza topped with sliced black olives, green bell peppers, diced tomatoes, sweet corn, onions, and melted mozzarella cheese.",
    sizes: [{ id: "reg", name: "Personal Size", price: 550 }],
    addons: [
      { id: "addon-cheese", name: "Extra Cheese", price: 60, image: "Garlic-Aioli.webp" }
    ],
    optionTitle: "Choose Crust",
    options: ["Thin Crust", "Stuffed Crust", "Gluten Free"]
  },
  {
    id: 67,
    name: "Toasted Shawarma Wrap",
    category: "fries-hotdogs",
    price: 380,
    photo: "3.jpg",
    description: "Slices of seasoned grilled beef wrapped in warm flatbread with pickles, garlic paste, and toasted to crispy golden perfection.",
    sizes: [{ id: "reg", name: "Regular Wrap", price: 380 }],
    addons: [
      { id: "addon-jalapeno", name: "Pickled Jalapeños", price: 40, image: "Cucumber.webp" }
    ],
    optionTitle: "Sauce Option",
    options: ["Garlic Sauce", "Spicy Tahini", "Kona Secret Sauce"]
  },
  {
    id: 68,
    name: "Herbed Grilled Chicken Breast",
    category: "fries-hotdogs",
    price: 490,
    photo: "4.jpg",
    description: "Juicy, perfectly seasoned grilled chicken breast served with fresh lime slices, shredded carrots, cherry tomatoes, and garden mint.",
    sizes: [{ id: "reg", name: "Standard Portion", price: 490 }],
    addons: [
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" }
    ],
    optionTitle: "Choose Cooking Style",
    options: ["Classic Grilled", "Lemon Pepper", "Spicy Cajun"]
  }
];


export const events = [
  {
    id: 1,
    title: "Aloha Friday Nights",
    date: "Every Friday, 7 PM - 11 PM",
    location: "Lakeshore Hotel Patio",
    description: "Join us for authentic Hawaiian slack-key guitar performances, complimentary tropical welcome punches, and a special custom Poke Bowl menu featuring exclusive imports.",
    image: "/assets/images/gallery-1.png"
  },
  {
    id: 2,
    title: "Bubble Tea DIY Workshop",
    date: "First Saturday of the Month, 3 PM",
    location: "Courtside Shack, Shatarkul",
    description: "Learn how to brew, shake, and seal your own bubble tea flavors under the guidance of our head mixologists. Bring your friends and walk away with your own customized recipes!",
    image: "/assets/images/gallery-3.png"
  }
];
