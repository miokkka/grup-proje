import React from "react";
import Box from "./Components/Box/Box";
import InfoCard from "./Components/InfoCard/InfoCard";
import Navbar from "./Components/Navbar/Navbar";
import ShoppingCard from "./Components/ShoppingCard/ShoppingCard";
import "./App.scss";
import { LuPackage, LuCircleCheck, LuGift } from "react-icons/lu";


function App() {
  const summaryData = [
    { label: "Active Orders", value: "3", icon: <LuPackage />, colorClass: "" },
    {
      label: "Completed Orders",
      value: "24",
      icon: <LuCircleCheck />,
      colorClass: "completed",
    },
    {
      label: "Reward Points",
      value: "1,240",
      icon: <LuGift />,
      colorClass: "points",
    },
  ];

  const recentProducts = [
    {
      image: "",
      title: "Premium Leather Wallet",
      price: 49.99,
      oldPrice: 69.99,
    },
    {
      image: "",
      title: "Wireless Charging Pad",
      price: 29.99,
    },
    {
      image: "",
      title: "Coffee Mug Set",
      price: 24.99,
    },
    {
      image: "",
      title: "Portable Phone Stand",
      price: 19.99,
    },
  ];

  const cartItems = [
    {
      image: "",
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
    },
    {
      image: "",
      name: "Smart Watch Series 8",
      price: 399.99,
    },
  ];

  return (
    <div className="app-wrapper">
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div className="main-content">
        <h1 className="section-title">Dashboard</h1>
        <p className="section-text">
          Welcome back! Here's your account overview.
        </p>
        <div className="box-grid">
          {summaryData.map((data, index) => (
            <Box
              key={index}
              title={data.label}
              value={data.value}
              icon={data.icon}
            />
          ))}
        </div>
        <h2 className="section-title">Recently Viewed</h2>
        <div className="products-grid">
          {recentProducts.map((product, index) => (
            <InfoCard
              key={index}
              img={product.img}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
        <h2 className="section-title">Shopping Cart</h2>
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <InfoCard
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
