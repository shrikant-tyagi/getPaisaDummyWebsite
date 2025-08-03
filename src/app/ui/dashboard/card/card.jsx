import React from 'react';
import styles from './card.module.css';
import { MdOutlineSupervisedUserCircle } from 'react-icons/md';

const card = () => {
  return (
    <div className={styles.container}>
        <MdOutlineSupervisedUserCircle size={24}/>
        <div className={styles.info}>
          <div>Total Users</div>
          <div>10,675</div>
          <div className='text-[12px]'> <span className='text-yellow-600'>12%</span> more than previous one.</div>
        </div>
    </div>
  )
}

export default card