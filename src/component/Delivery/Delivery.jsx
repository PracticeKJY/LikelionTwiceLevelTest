import React from 'react';
import styles from './Delivery.module.css';

function Delivery() {
  return (
    <>
      <div className={styles.delivery}>
        <span tabIndex="0" aria-label="배송수단">
          택배배송
        </span>
        <span
          className={styles.deliveryPrice}
          tabIndex="0"
          aria-label="배송가격"
        >
          3,000원
        </span>
        <span
          className={styles.deliveryOption}
          tabIndex="0"
          aria-label="배송비결제방식"
        >
          (주문시 결제)
        </span>
      </div>
      <span className={styles.deliveryEtc} aria-label="단위별 배송비 부과기준">
        10개마다 부과
      </span>
    </>
  );
}

export default Delivery;
