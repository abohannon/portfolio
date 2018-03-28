import React from 'react';
import styles from './sectionHeader.module.scss';

const SectionHeader = ({ title }) => (
  <h2 className={styles.title}>
    {title}
  </h2>
);

export { SectionHeader };
