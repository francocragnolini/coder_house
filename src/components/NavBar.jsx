import styles from "./NavBar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span>logo</span>
        {/* <img src="" alt="" /> */}
      </div>
      <ul className={styles.list}>
        <li>Clothes</li>
        <li>Accessories</li>
        <li>Shoes</li>
      </ul>
      <div className={styles.cart}>
        <AiOutlineShoppingCart />
        <span>0</span>
      </div>
    </nav>
  );
};

export default NavBar;
