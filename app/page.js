"use client"
import styles from './page.module.css';
import { useState } from 'react';
import Confetti from 'react-dom-confetti';

const confettiConfig = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 100,
  dragFriction: 0.1,
  duration: 4000,
  stagger: 0,
  width: '10px',
  height: '10px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
};


export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
    event.currentTarget.reset();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  }

  return (
    <div className={styles.backgroundWithImage}>
      <div className={styles.container}>
        <h3 className={styles.title}>Put your project link to make it bug-free</h3>
        <form className={styles.searchBox} onSubmit={onSubmit}>
          <input className={styles.searchInput} type="text" placeholder="Let's make your project bug-free" required />
          <button className={styles.searchButton} type="submit">Submit</button>
        </form>
        <Confetti active={isSubmitted} config={confettiConfig} />
        {
          isSubmitted && (
            <h4 className={styles.celebrateText}>Yeah! your project is already bug-free 🎉🎉🎉</h4>
          )
        }
      </div>
    </div>
  )
}
