import React from "react";
import Box from "./Components/Box/Box";
import InfoCard from "./Components/InfoCard/InfoCard";
import Navbar from "./Components/Navbar/Navbar";
import ShoppingCard from "./Components/ShoppingCard/ShoppingCard";
import './App.scss';

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
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <div className="web-title">
        <h1 className="main-title">Dashboard</h1>
        <p className="desc">Welcome back! Here's your account overview.</p>
      </div>
      <div className="boxes">
        <Box />
      </div>
      <div className="recently-viewed">
        <h2 className="section-title">Recently Viewed</h2>
      </div>
    </div>
  );
}

export default App;
