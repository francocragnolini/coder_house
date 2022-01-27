import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import CartWidget from "./CartWidget";

const links = [{ title: "Shirts" }, { title: "Sneakers" }, { title: "Coats" }];
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img
            className={styles.logoImg}
            src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/Website/website_logo_8.png"
            alt=""
          />
        </NavLink>
      </div>

      <ul className={styles.list}>
        <li>
          <NavLink to={`/category/categoryId`}>Clothes</NavLink>
        </li>
        <li>
          <NavLink to={`/category/categoryId`}>Accessories</NavLink>
        </li>
        <li>
          <NavLink to={`/category/categoryId`}>Shoes</NavLink>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
