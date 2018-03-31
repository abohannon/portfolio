import React from 'react';
import styles from './section.module.scss';

const Section = ({
  children, type,
}) => (
  <div className={`${styles.section} ${styles[type]}`}>
    {children}
  </div>
);

export { Section };

