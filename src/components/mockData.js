export const categories = [
  { id: "all", name: "All Categories" },
  { id: "poke-bowls", name: "Poke Bowls" },
  { id: "bibimbap", name: "Bibimbap" },
  { id: "fries-hotdogs", name: "Fries & Hotdogs" },
  { id: "juice-smoothies", name: "Juice & Smoothies" },
  { id: "drinks-coffee", name: "Drinks & Coffee" }
];

export const products = [
  {
    id: 61,
    name: "Korean Bibimbap Bowl",
    category: "bibimbap",
    price: 620,
    photo: "https://i.ibb.co.com/mF4VsqR0/1.jpg",
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
    photo: "https://i.ibb.co.com/nqyYpVCn/2.png",
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
    photo: "https://i.ibb.co.com/RTz1Kcfy/3.jpg",
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
    photo: "https://i.ibb.co.com/Q7Pb8hpZ/4.jpg",
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
    photo: "https://i.ibb.co.com/nqyYpVCn/2.png",
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
    photo: "https://i.ibb.co.com/0pmFxVZC/3.png",
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
    photo: "https://i.ibb.co.com/Q7Pb8hpZ/4.jpg",
    description: "Juicy, perfectly seasoned grilled chicken breast served with fresh lime slices, shredded carrots, cherry tomatoes, and garden mint.",
    sizes: [{ id: "reg", name: "Standard Portion", price: 490 }],
    addons: [
      { id: "addon-pine", name: "Pineapple Chunk", price: 40, image: "Pineapple.webp" }
    ],
    optionTitle: "Choose Cooking Style",
    options: ["Classic Grilled", "Lemon Pepper", "Spicy Cajun"]
  },
  {
    id: 70,
    name: "Kona Volcanic Latte",
    category: "drinks-coffee",
    price: 250,
    photo: "https://i.ibb.co.com/9kYqzYFq/Coffee-in-Kona-3-Cappuccinos.jpg",
    description: "Our signature espresso shot pulled from 100% Kona volcanic-soil beans, topped with velvety steamed milk and a dusting of Hawaiian black lava salt for a bold, smooth finish.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 250 },
      { id: "lrg", name: "Large Cup", price: 320 }
    ],
    addons: [
      { id: "addon-hazel", name: "Hazelnut Syrup", price: 30, image: "Hazelnut.webp" },
      { id: "addon-honey", name: "Honey Drizzle", price: 20, image: "Honey-Mustard.webp" }
    ],
    optionTitle: "Milk Choice",
    options: ["Full Cream Milk", "Oat Milk", "Almond Milk", "Soy Milk"]
  },
  {
    id: 71,
    name: "Lava Salt Caramel Macchiato",
    category: "drinks-coffee",
    price: 290,
    photo: "https://i.ibb.co.com/FgnK9G1/coffee-cup.jpg",
    description: "Layered espresso macchiato with rich caramel sauce, velvety foam, and a bold sprinkle of Hawaiian lava salt — a beautifully balanced sweet-and-salty coffee experience.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 290 },
      { id: "lrg", name: "Large Cup", price: 360 }
    ],
    addons: [
      { id: "addon-hazel", name: "Hazelnut Syrup", price: 30, image: "Hazelnut.webp" }
    ],
    optionTitle: "Temperature",
    options: ["Hot", "Iced", "Blended Frappe"]
  },
  {
    id: 72,
    name: "Lychee Rose Bubble Tea",
    category: "drinks-coffee",
    price: 280,
    photo: "https://i.ibb.co.com/SVLYhM1/images-3.jpg",
    description: "Premium jasmine rose green tea infused with lychee juice, loaded with chewy tapioca pearls and lychee popping boba. Sweet, floral and utterly refreshing.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 280 },
      { id: "lrg", name: "Tall Cup", price: 350 }
    ],
    addons: [
      { id: "addon-pearls", name: "Extra Tapioca Pearls", price: 40, image: "white.webp" }
    ],
    optionTitle: "Sugar Level",
    options: ["100% Full Sugar", "70% Less Sweet", "50% Half Sugar", "0% Unsweetened"]
  },
  {
    id: 73,
    name: "Gochugaru Spicy Mocha",
    category: "drinks-coffee",
    price: 270,
    photo: "https://i.ibb.co.com/7pGcYb2/images-1.jpg",
    description: "A daring fusion of rich dark chocolate mocha with a subtle fiery kick of Korean gochugaru chilli flakes, topped with whipped cream and dark cocoa powder.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 270 },
      { id: "lrg", name: "Large Cup", price: 340 }
    ],
    addons: [
      { id: "addon-honey", name: "Honey Drizzle", price: 20, image: "Honey-Mustard.webp" }
    ],
    optionTitle: "Spice Level",
    options: ["Mild", "Medium", "Extra Spicy"]
  },
  {
    id: 74,
    name: "Korean BBQ Cold Brew",
    category: "drinks-coffee",
    price: 260,
    photo: "https://i.ibb.co.com/HrCtZ8g/Screenshot-2024-04-24-114006.png",
    description: "Smooth, 18-hour cold-steeped dark roast coffee with hints of smoky BBQ vanilla, served over crystal-clear ice cubes with a swirl of condensed milk.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 260 }
    ],
    addons: [
      { id: "addon-hazel", name: "Hazelnut Syrup", price: 30, image: "Hazelnut.webp" },
      { id: "addon-honey", name: "Honey Drizzle", price: 20, image: "Honey-Mustard.webp" }
    ],
    optionTitle: "Sweetness",
    options: ["No Sugar", "Light Sweet", "Medium Sweet"]
  },
  {
    id: 75,
    name: "Umami Ranch Iced Coffee",
    category: "drinks-coffee",
    price: 240,
    photo: "https://i.ibb.co.com/7xbKTDph/spicy-cowgirl-coffee-1616524606.avif",
    description: "A uniquely bold Kona-house iced coffee with creamy ranch-style butter foam, brewed from our signature single-origin Hawaiian bean blend, served over crushed ice.",
    sizes: [
      { id: "reg", name: "Regular Cup", price: 240 },
      { id: "lrg", name: "Large Cup", price: 300 }
    ],
    addons: [
      { id: "addon-honey", name: "Honey Drizzle", price: 20, image: "Honey-Mustard.webp" }
    ],
    optionTitle: "Temperature",
    options: ["Iced", "Blended Frappe"]
  }
];

export const events = [
  {
    id: 1,
    title: "Aloha Friday Nights",
    date: "Every Friday, 7 PM - 11 PM",
    location: "kyline Rooftop Lounge",
    description: "Join us for authentic Hawaiian slack-key guitar performances, complimentary tropical welcome punches, and a special custom Poke Bowl menu featuring exclusive imports.",
    image: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?q=80&w=800"
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
