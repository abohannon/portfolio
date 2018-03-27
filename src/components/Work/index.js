import React from 'react';
import styles from './work.module.scss';
import { MyCard } from '../../components/common';
import config from './config.json';

console.log(config);

const renderCards = () => config.map((project, index) => (
  <MyCard
    key={project.name}
    index={index}
    cardTitle={project.name}
    cardSubtitle={project.tags}
    imageUrl={project.imageUrl}
    urls={[...project.urls]}
  >
    {project.description}
  </MyCard>
));

const Work = () => (
  <div className={styles.work}>
    <div className={styles.work__container}>
      <h2 className={styles.work__title}>
       Recent Work
      </h2>
      <div className={styles.work__cards}>
        {renderCards()}
      </div>
      <div className={styles.work__footer}>
        <a href="#" className={styles.link}>View more on Behance &rarr;</a>
        <a href="#" className={styles.link}>View more on GitHub &rarr;</a>
      </div>
    </div>
  </div>
);

export default Work;
