import React, { useEffect,useState } from 'react';
import styles from "./loaderProduct.module.css";

export default function LoaderProduct({eventData}) {
    const [lineArr, setLineArr] = useState([]);

    useEffect(() => {
      const interval = setInterval(() => {
        setLineArr(prevLineArr => [...prevLineArr, prevLineArr.length + 1]);
      }, 400);
  
      // Stop the interval after 20 seconds
      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 14000);
  
      // Clean up the interval and timeout on unmount
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, []);
  
    return (
      <span className={`${eventData.screen=="responsive" ? styles.loaderResponsive : styles.loaderVertical}`}>
        {lineArr.map((item, index) => (
          <div className={styles.line} key={index}></div>
        ))}
      </span>
    );
}
