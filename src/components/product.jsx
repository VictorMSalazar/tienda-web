import React from "react";
import "../App.css"

export function Card({ imageSource, title, price }) {
    return (
      <div className="card  text-center bg-dark">
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
        </div> 
        <p className="card-text text-light">${price}</p>
      </div>
    );
  }