import React from 'react';
import styles from './navbar.module.css'
import Image from 'next/image';
import image from '../../../public/image.png'
import Link from 'next/link';

const navbar = () => {

    const handleLogin = (e) => {
        e.preventDefault();

        
    }

  return (
    <div className={styles.container}>
        <div classsName={styles.logo}><Image alt='' src={image} width={80}/></div>
        <div className={styles.menu}>
            <div>About</div>
            <div>Blog</div>
            <div>Contact</div>
        </div>
        <Link href='/login'><button className={styles.loginbutton}>Login</button></Link>
    </div>
  )
}

export default navbar