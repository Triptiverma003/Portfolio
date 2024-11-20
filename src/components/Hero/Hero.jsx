import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './hero.module.css';

const Hero = () => {
  //const imageUrl = getImageUrl('about/officialpic.jpeg');
  //console.log(imageUrl); checking if my img is loading in my browser
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Tripti</h1>
        <p className={styles.description}>
          Aspiring Web Developer, passionate about building sleek, user-friendly websites.
          Wanna Know More About Me!<br/>
        </p>
        <a href="mailto:vtripti53@gmail.com" className={styles.contactBtn}>Contact Me!</a>
      </div>
        <img src={getImageUrl('about/officialpic.png')} alt="Photo of Tripti, React and Node.js learner" className={styles.img} />
      <div className={styles.topblur}/>
      <div className={styles.bottomblur}/>
    </section>
  );
};

export default Hero;
