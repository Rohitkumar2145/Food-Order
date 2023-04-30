import React from "react";
import classes from "../Layout/Header.module.css";
import mealImage from "../../Assests/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodify</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table with food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
