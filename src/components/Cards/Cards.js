import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

//import best images for cards
import pc1 from "../../assets/images/pc1.jpg";
import keyboard1 from "../../assets/images/keyboard1.jpg";
import headset1 from "../../assets/images/headset1.jpg";
import mouse1 from "../../assets/images/mouse1.jpg";
import laptop2 from "../../assets/images/laptop2.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some of our products!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={pc1}
              text="Prebuilt RTX 3060 / Ryzen 5600X Gaming PC"
              label="Prebuilt PC"
              path="/products"
            />
            <CardItem
              src={laptop2}
              text="ASUS ROG Strix G17 Gaming Laptop"
              label="Laptop"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={keyboard1}
              text="Corsair K70 RGB MK.2 Mechanical Gaming Keyboard"
              label="Keyboard"
              path="/products"
            />
            <CardItem
              src={headset1}
              text="Logitech G733 Lightspeed Wireless Gaming Headset"
              label="Headset"
              path="/products"
            />
            <CardItem
              src={mouse1}
              text="Razer Lacehead Wireless Gaming Mouse"
              label="Mouse"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
