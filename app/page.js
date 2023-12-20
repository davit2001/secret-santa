"use client"
import styles from './page.module.css';
import { useCallback, useState } from 'react';
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

  const onSubmit = useCallback(() => {
    setIsSubmitted(true);
    fetch('/api/sms', {
      method: 'POST',
    }).then(() => {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    });
  }, [])

  return (
    <div className={styles.backgroundWithImage}>
      <div className={styles.container}>
        <h3 className={styles.title}>Press the button to send magic message to developers.</h3>
        <button className={styles.searchButton} onClick={onSubmit} disabled={isSubmitted}>Send Magical message</button>
        <Confetti active={isSubmitted} config={confettiConfig} />
        <h4
          className={`${styles.celebrateText} ${isSubmitted ? styles.show : styles.fadeText}`}
        >
          Yeah! your project is already bug-free 🎉🎉🎉
        </h4>
      </div>
    </div>
  )
}
