import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

function Modal(props) {
  // const [modal, setModal] = useState(props.modal);
  // console.log(props.modal);
  // console.log(props);
  const handleModal = () => {
    props.setModal(false);
  };

  // useEffect(() => {
  //   // console.log(document.getElementById('2'));
  //   if (modal === false) {
  //     document.getElementById('2').style.display = 'none';
  //   }
  // });

  return (
    <div className={styles.span}>
      <div id={2} className={styles.container}>
        총 상품에{' '}
        <span className={styles.notice}>배송비는 포함되어 있지 않습니다.</span>{' '}
        <button
          className={styles.xButton}
          onClick={() => {
            handleModal();
          }}
        >
          {' '}
        </button>{' '}
        결제시 배송비가 추가될 수 있습니다.
      </div>
    </div>
  );
}

export default Modal;
