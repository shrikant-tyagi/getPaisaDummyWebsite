"use client"

import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation';
import { MdDarkMode, MdLightMode, MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';
import { useTheme } from 'next-themes';

const navbar = () => {

    const pathname = usePathname();
    const {theme, setTheme} = useTheme();
    const [mount, setMount] = useState(false);


    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        console.log(theme);
    };

    useEffect(() => {
        setMount(true);
    },[]);

    if(!mount) return null;


    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {pathname.split("/").pop().charAt(0).toUpperCase()+pathname.split("/").pop().slice(1)}
            </div>

            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type='text' placeholder='Search..' className={styles.input}/>
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    {
                        theme === "dark" ? (<MdLightMode size={20} onClick={toggleTheme}/>) 
                        : (<MdDarkMode size={20} onClick={toggleTheme}/>)
                    }
                </div>
            </div>
        </div>
    )
    }

export default navbar