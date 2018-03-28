import React from 'react';
import styles from './work.module.scss';
import { MyCard, SectionHeader } from '../../components/common';
import config from './config.json';

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
      <SectionHeader title="Recent Work" />
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
