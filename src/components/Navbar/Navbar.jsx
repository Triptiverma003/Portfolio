import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn} 
          src={menuOpen ? getImageUrl("menu/close.png") : getImageUrl("menu/about.png")} 
          alt="menu-button"
          onClick={() => setmenuOpen(!menuOpen)} 
        />
        <ul 
          className={`${styles.menuitems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setmenuOpen(false)}
        >
          <li><a href="/">About</a></li>
          <li><a href="/">TechStack</a></li>
          <li><a href="/">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
