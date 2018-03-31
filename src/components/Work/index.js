import React from 'react';
import styles from './work.module.scss';
import { MyCard, Section, Container, SectionHeader } from '../../components/common';
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
  <Section className="work" type="topo">
    <Container>
      <SectionHeader title="Recent Work" />
      <div className={styles.work__cards}>
        {renderCards()}
      </div>
      <div className={styles.work__footer}>
        <a href="https://www.behance.net/abohannon" className={styles.link}>
        View more on Behance &rarr;
        </a>
        <a href="https://github.com/abohannon" className={styles.link}>View more on GitHub &rarr;
        </a>
      </div>
    </Container>
  </Section>
);

export default Work;
