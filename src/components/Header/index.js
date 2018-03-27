import React from 'react';
import styles from './header.module.scss';
import Link from 'gatsby-link';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.header__container}>
      <h1 className={styles.header__content}>
        <span className={styles.header__title}>Hi, I'm Adam</span>
        <span className={styles.header__subtitle}>I'm a full-stack engineer living in San Diego who loves creating user-driven experiences with Javascript and React. </span>
      </h1>
    </div>
  </div>
);

export default Header;
