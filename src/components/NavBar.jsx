import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import CartWidget from "./CartWidget";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  // fetching the array of categories
  useEffect(() => {
    const getCategories = async () => {
      const query = collection(db, "categories");
      const snapshot = await getDocs(query);
      const listItems = [];
      snapshot.forEach((doc) => {
        const object = { id: doc.id, ...doc.data() };
        return listItems.push(object);
      });
      setCategories(listItems);
    };
    getCategories();
  }, []);

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
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={`/category/${category.name}`}>{category.name}</NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
