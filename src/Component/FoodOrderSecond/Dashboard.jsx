import React from "react";
import "./Dashboard.css";

const categories = [
  "Fruits", "Bread", "Vegetable", "Fish", "Meat", "Drinks", "Sea Food", "Ice Cream", "Juice", "Jam"
];

const products = [
  { name: "Strawberry", price: "$20.10", img: "https://via.placeholder.com/100" },
  { name: "Cabbage", price: "$15.10", img: "https://via.placeholder.com/100" },
  { name: "Broccoli", price: "$25.10", img: "https://via.placeholder.com/100" },
  { name: "Orange", price: "$12.10", img: "https://via.placeholder.com/100" },
  { name: "Fresh Apple", price: "$18.10", img: "https://via.placeholder.com/100" },
];

const discounts = [
  { text: "35% Discount", color: "green" },
  { text: "20% Discount", color: "blue" },
  { text: "20% Discount", color: "blue" },
  { text: "10% Discount", color: "orange" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Sami Shop</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Categories</li>
            <li>Favourites</li>
            <li>Orders</li>
            <li>Messages</li>
            <li>Top Deals</li>
            <li>Settings</li>
          </ul>
        </nav>
        <button className="logout">Log Out</button>
      </aside>

      <main className="content">
        <header>
          <input type="text" placeholder="Search your grocery products..." />
        </header>

        <section className="categories">
          {categories.map((cat, index) => (
            <span key={index} className="category">{cat}</span>
          ))}
        </section>

        <section className="products">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </section>

        <section className="discounts">
          {discounts.map((discount, index) => (
            <div key={index} className="discount-card" style={{ background: discount.color }}>
              {discount.text}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;