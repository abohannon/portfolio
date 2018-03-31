import React from 'react';
import styles from './about.module.scss';
import { Section, Container, SectionHeader } from '../../components/common';

const About = () => (
  <div>
    <Section>
      <Container>
        <SectionHeader title="About me" />
        <div className={styles.about__text}>
          <p>I&#39;m a former integrated marketing professional turned software engineer who is passionate about the intersection between people, culture, and technology. Throughout my career I&#39;ve had the opportunity to work with startups, agencies, and Fortune 500 companies. I hold degrees in cultural anthropology and psychology with a focus on media studies, cyber culture, and digital ethnography. My past experience both professional and academic has deeply influenced my approach to development and my belief that software should be designed for humans to use, not just machines to consume. You can learn more about my professional experience over at <a href="https://www.linkedin.com/in/adambohannon/LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          <p>I&#39;m also a son, brother, uncle, skydiver and surfer who enjoys reading, traveling, camping, hanging out with my dogs, and sometimes running.</p>
          <p > Currently some of my favorite tools include Javascript, React, React Native, Redux, Node / Express, MongoDB, Firebase, and GatsbyJS. I&#39;m always working on some sort of side project to test out new tools and hone my skills. You can see what I&#39;ve been working on and thinking about lately over at <a href="https://github.com/abohannon" target="_blank" rel="noopener noreferrer"> GitHub </a> and <a href="https://codepen.io/abohannon/" target="_blank " rel="noopener noreferrer">CodePen</a>.
          </p>
          <p>If you&#39;re interested in collaborating, I&#39;d love to hear from you! <a href="mailto:abo46n2@gmail.com" target="_blank" rel="noopener noreferrer">Shoot me an email</a>.</p>
        </div>
      </Container>
    </Section>
  </div>
);

export default About;

