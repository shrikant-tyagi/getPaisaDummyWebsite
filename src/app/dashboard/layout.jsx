import React from 'react';
import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import styles from '../ui/dashboard/dashboard.module.css';

const dashboardLayout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>

        <div className={styles.content}>
            <Navbar />
            <div>{children}</div>
        </div>
    </div>
  )
}

export default dashboardLayout