import React from 'react';
import styles from './sidebar.module.css';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter
} from 'react-icons/md';
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
import image from '../../../../public/noavatar.png'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
            <Image alt='' src={image} height={50} width={50} className={styles.userImage}/>
            <div className={styles.userdetails}>
                <div className={styles.username}>John Doe</div>
                <div className={styles.usertitle}>Administrator</div>
            </div>
        </div>
        <ul className={styles.categories}>
            {menuItems.map((category) => (
                <li key={category.title}>
                    <span>{category.title}</span>
                    {category.list.map((item) => (
                        <MenuLink item={item} key={item.title} />
                    ))}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default sidebar