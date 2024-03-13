import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>reactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} onClose={props.onClose} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="table full of food" />
      </div>
    </>
  );
};

export default Header;
