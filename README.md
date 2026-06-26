# Cove Cafe &mdash; Hawaiian Inspired Cuisines E-Commerce

Built using Vite, React Router, and the original CSS/assets of the reference site, ensuring a pixel-perfect replica of the branding, product categories, and checkout procedures.

---

## 🌟 Key Features

1. **Hawaiian-Inspired Landing Page (`/`)**
   - **Hero Carousel**: Fully functional React banner sliding through three signature dishes (Hawaiian Poke Bowl, Ahi Poke, and Classic Beef Bibimbap) with custom titles, summaries, and images.
   - **Welcome Popup Modal**: Integrated onload newsletter coupon box triggering a SweetAlert2 subscription confirmation.
   - **Concierge Shacks Location**: Grid map directing customers to our 24/7 Lakeshore Hotel branch or Chefs Table Courtside patio.

2. **Food Catalog & Filters (`/menu`)**
   - **Dynamic Filtering Tabs**: Filter menu items instantly by categories (Poke Bowls, Bibimbap, Fries & Hotdogs, Juice & Smoothies) with zero page reloads.
   - **Live Search**: Instant text filtering by dish name or ingredients description.

3. **Dish Customization Details (`/product/:id`)**
   - **Size Variation Radio Selectors**: Regular, Large, etc., updating the base price.
   - **Base Preparation Options**: Select between Sushi Rice, Soba Noodles, or Salad Greens.
   - **Addon checkboxes**: Interactive toppings list (Crab Stick, Pineapple, Soba Noodles, Kimchi) with image cards and dynamic extra surcharge additions.
   - **Quantity Adjustments**: Incrementor widget calculating live totals on the order panel.

4. **Floating Mini-Cart Sidebar**
   - **Slide-out drawer**: Access cart lines instantly from any page by clicking the floating cart button in the header.
   - **Dynamic Counters**: Live unit counts, line totals, service charges, VAT, and checkout buttons.

5. **Shopping Cart Page (`/cart`)**
   - **Detailed Table Layout**: Summarizes custom choices, quantities, and line item costs.
   - **Live Promotional Codes**: Validates code applications (`COVE20` for 20% off, `ALOHA15` for 15% off) with real-time recalculations.

6. **Acquisition Checkout (`/checkout`)**
   - **Delivery Address validation**: Contact info, city dropdown, and address fields.
   - **Payment settlement**: Cash on Delivery (COD) or SSLCommerz payment portals.
   - **Placement Success Dialog**: Generates order reference tracking IDs and clears the cart state.

---

## 🛠️ Technologies Used

- **Core**: React.js 18 (Vite Bundler)
- **Navigation**: React Router DOM (v6)
- **Icons**: React Icons (Feather Icons & Font Awesome)
- **Modals**: SweetAlert2
- **Styling**: Reference Bootstrap & Cove Cafe `main.css` loaded dynamically in `index.html`

---

## 📦 Folder Structure

```
public/
├── assets/             # Copied CSS, scripts, and fonts from reference project
│   ├── css/            # main.css, bootstrap.min.css, font-awesome.min.css, jquery-ui.css
│   └── images/         # Logo, banner images, boba graphics
└── erp/
    └── images/         # 700+ high-res food items and addon thumbnails from reference ERP
src/
├── components/         # Page sections and components
│   ├── LandingPage/    # Carousel slider, About columns, Shack locations
│   ├── ProductDetails/ # Dish detail, Size radios, toppings checkboxes
│   ├── Cart/           # Detailed items table, Coupon engine
│   ├── Checkout/       # Shipping forms, payment selectors, order summary
│   ├── Navbar.jsx      # Sticky menu header with slide-out sidebar cart drawer
│   ├── Footer.jsx      # Location addresses, helpline, accepted cards widget
│   ├── mockData.js     # Food database matching erp/images schemas
│   └── ErrorPage.jsx   # Custom 404 page ("Lost in the Waves")
├── Layouts/
│   └── Root.jsx        # App layout wrapping Navbar, Router Outlet, and ScrollRestoration
├── Provider/
│   └── CartProvider.jsx# React Context storing global cart state & service charges/VAT
├── routes/
│   └── Routes.jsx      # Router paths
├── App.css
├── index.css           # Tailwind configuration base classes
└── main.jsx            # React root mount script
```

---

## ⚙️ Setup and Installation Instructions


1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Launch the Local Development Server**:
   ```bash
   npm run dev
   ```

3. **Compile Production Bundle**:
   ```bash
   npm run build
   ```
