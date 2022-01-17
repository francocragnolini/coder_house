import styles from "./NavBar.module.css";
import CartWidget from "./CartWidget";
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
      <CartWidget />
    </nav>
  );
};

export default NavBar;
