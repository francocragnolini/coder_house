import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import CartWidget from "./CartWidget";

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
          <NavLink to={`/category/categoryId`}>Suits</NavLink>
        </li>
        <li>
          <NavLink to={`/category/categoryId`}>Shirts</NavLink>
        </li>
        <li>
          <NavLink to={`/category/categoryId`}>Shoes</NavLink>
        </li>
        <li>
          {}
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
