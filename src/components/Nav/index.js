import React from 'react';
import styles from './nav.module.scss';

const Nav = () => (
  <div className={styles.navigation}>
    <input type="checkbox" className={styles.navigation__checkbox} id="nav-toggle" />
    <label htmlFor="nav-toggle" className={styles.navigation__button}>
      <span className={styles.navigation__icon}>&nbsp;</span>
    </label>
    <div className={styles.navigation__background}>&nbsp;</div>
    <nav className={styles.navigation__nav}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}><span>01</span>Work</a>
        </li>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}><span>02</span>Tools</a>
        </li>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}><span>03</span>About Me</a>
        </li>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}><span>04</span>Contact</a>
        </li>
        <li className={styles.navigation__item}>
          <a href="#" className={styles.navigation__link}><span>05</span>GitHub</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;

// <label htmlFor="nav-toggle" className={styles.navigation__button}>
//   <span className={styles.navigation__icon}>&nbsp;</span>
// </label>
// <div className={styles.navigation__background}>&nbsp;</div>
// <nav className={styles.navigation__nav}>
//   <ul className={styles.navigation__list}>
//     <li className={styles.navigation__item}>
//       <a href="#" className={styles.navigation__link}><span>01</span>Work</a>
//     </li>
//     <li className={styles.navigation__item}>
//       <a href="#" className={styles.navigation__link}><span>02</span>Tools</a>
//     </li>
//     <li className={styles.navigation__item}>
//       <a href="#" className={styles.navigation__link}><span>03</span>About Me</a>
//     </li>
//     <li className={styles.navigation__item}>
//       <a href="#" className={styles.navigation__link}><span>04</span>Contact</a>
//     </li>
//   </ul>
// </nav>
