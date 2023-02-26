import React from 'react';
import styles from './ProductIntro.module.css';

function ProductIntro() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mainTitle} alt="제품명">
          래피젠 코로나 자가 검사 키트
        </h1>
        <span className={styles.subTitle} alt="단위 수량">
          2개입X1박스
        </span>
      </div>
    </>
  );
}

export default ProductIntro;
