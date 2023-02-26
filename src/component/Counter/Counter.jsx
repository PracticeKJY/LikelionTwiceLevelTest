import React, { useState, useEffect } from 'react';
import { TotalPrice, PurchaseButton } from '../';
import styles from './Counter.module.css';

function Counter({ min = 1, max = 100, step = 1, count: initialCount = 1 }) {
  let [state, setState] = useState(initialCount);
  // console.log(state);
  useEffect(() => {
    if (state < 0) {
      state = 0;
    }
  });

  const handleDec = () => {
    setState(state - 1);
  };
  const handleInc = () => {
    setState(state + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.buttonMinus}
          type="button"
          onClick={handleDec}
        >
            <span className={styles.a11y}>수량 감소 </span>
          -
        </button>
        <output className={styles.countNum}>{state > 0 ? state : 0} </output>
        <button className={styles.buttonPlus} type="button" onClick={handleInc}>
            <span className={styles.a11y}>수량 증가 </span>
          +
        </button>
      </div>
      <TotalPrice count={state} />
      <PurchaseButton id={1} count={state} />
    </>
  );
}

export default Counter;

// { min = 1, max = 100, step = 1, count: initialCount = 1 }
