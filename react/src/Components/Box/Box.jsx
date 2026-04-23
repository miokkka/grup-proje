import React from "react";
import "./Box.scss";

const Box = ({ title, value, icon }) => {
  
    return (
      <div className="box-card">
        <div className="box-header">
          <span className="title">{title}</span>
          <span className="icon">{icon}</span>
        </div>
        <div className="value">{value}</div>
      </div>
    );
  
};

export default Box;
