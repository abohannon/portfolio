import React from 'react';
import styles from './container.module.scss';

const Container = ({ children, style }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export { Container };

