import React from 'react';
import styles from './App.module.css';
import {
  Counter,
  ProductIntro,
  Delivery,
  DiscountPrice,
} from './component';

export default function App() {
  const itemList = [
    {
      name: '래피젠 코로나 자가검사키트',
      count: 0,
      price: 56760,
      amount: 1,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.kitImg}
          src="assets/product-img.svg"
          alt="래피엔 코로나 자가 검사키트 사진"
        />
        <ProductIntro />
        <DiscountPrice />
        <Delivery />
        <Counter count={1} />
      </div>
    </>
  );
}
