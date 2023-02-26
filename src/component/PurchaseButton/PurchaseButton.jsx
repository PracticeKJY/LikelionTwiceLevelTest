import React, { useState, useEffect } from 'react';
import styles from './PurchaseButton.module.css';
import disabledIcon from '../../assets/icon-naver-disabled.svg';

function PurchaseButton({ id = 1, count = 0 }) {
  const purchase = '구매하기';
  const [state, setState] = useState(count);
  // console.log(count);

  useEffect(() => {
    if (count > 0) {
      document.getElementById('1').style.cssText = 'color: #ffffff ';
      document.getElementById('1').addEventListener('mouseover', (event) => {
        event.target.style.background = '#0aae4f';
      });
      document.getElementById('1').addEventListener('mouseout', (event) => {
        event.target.style.background = '#03c75a';
      });
    } else {
      document.getElementById('1').style.cssText =
        'background: #dee0e3; color: #999999; cursor:default;';
      document.getElementById('1').addEventListener('mouseover', (event) => {
        event.target.style.background = '#dee0e3';
      });
      document.getElementById('1').addEventListener('mouseout', (event) => {
        event.target.style.background = '#dee0e3';
      });
    }
  });

  return (
    <button id={id} className={styles.percontainer}>
      <img className="iconImg" src={count > 0 ? "assets/icon-naver-normal.svg"  : disabledIcon} alt="" />
      {purchase}
    </button>
  );
}

export default PurchaseButton;

disabledIcon;



