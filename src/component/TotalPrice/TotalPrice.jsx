import React, { useState, useEffect } from 'react';
import styles from './TotalPrice.module.css';
import { Modal } from '../';

function TotalPrice(props) {
  const [state, Setstate] = useState(props);
  // console.log(props);
  const [modal, setModal] = useState(false);

  const handleModal = (modal) => {
    setModal(!modal);
  };

  console.log(modal);

  const price = 6370 * props.count;

  return (
    <section className={styles.totalContainer}>
      <div className={styles.totalPriceNotice}>
        <span tabIndex="0" aria-label="총 상품 금액에 관한 정보">
          총 상품 금액
        </span>
        <button
          className={styles.questionButton}
          onClick={() => {
            handleModal(modal);
          }}
        >
          <span className={styles.a11y}>도움말 상자</span>
          <img src="assets/tooltip-button.svg" alt="" />
        </button>
        {modal == true ? <Modal setModal={setModal} /> : null}
      </div>  
      <div className={styles.totalPrice}>
        <span className={styles.totalProductNumWrap} tabIndex="0">
          총 수량
          <span className={styles.totalProductNum}>
            {' '} 
            {props.count > 0 ? props.count : 0}
          </span>
          개
        </span>
        <span className={styles.totalPriceNum} tabIndex="0" aria-label=" 총 상품 합계 금액">
          {' '}
          {props.count > 0 ? price.toLocaleString() : 0}원{' '}
        </span>
      </div>
    </section>
  );
}

export default TotalPrice;
