import React from 'react';
import styles from './DiscountPrice.module.css';

function DiscountPrice() {
  return (
    <p className={styles.container}>
      <strong>
      <span className={styles.discountPercent} tabIndex="0" aria-label="할인율">
        88%
      </span>
      </strong>
      <div className={styles.discountPriceWrap}>
        <span className={styles.fullPrice} tabIndex="0" aria-label="원가">
          56,760원
        </span>
        <span className={styles.discountPrice} tabIndex="0" aria-label="할인가">
          6,370원
        </span>
      </div>
    </p>
  );
}

export default DiscountPrice;
