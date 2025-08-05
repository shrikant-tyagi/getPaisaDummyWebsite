import React from 'react';
import styles from './users.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';
import noavatar from "../../../public/noavatar.png"

const users = [
  {
    name: "Kavya Nair",
    email: "kavya@example.com",
    createdAt: "2025-02-11",
    role: "Borrower",
    status: "Active",
  },
  {
    name: "Nikhil Mehta",
    email: "nikhil@example.com",
    createdAt: "2025-03-03",
    role: "Lender",
    status: "Suspended",
  },
  {
    name: "Priya Choudhary",
    email: "priya@example.com",
    createdAt: "2025-04-22",
    role: "Loan Officer",
    status: "Active",
  },
  {
    name: "Rahul Kapoor",
    email: "rahul@example.com",
    createdAt: "2024-10-30",
    role: "Admin",
    status: "Inactive",
  },
  {
    name: "Ishita Joshi",
    email: "ishita@example.com",
    createdAt: "2025-06-12",
    role: "Support Agent",
    status: "Active",
  },
  {
    name: "Aarav Sharma",
    email: "aarav@example.com",
    createdAt: "2024-11-10",
    role: "Borrower",
    status: "Active",
  },
  {
    name: "Sneha Patel",
    email: "sneha@example.com",
    createdAt: "2024-08-02",
    role: "Lender",
    status: "Active",
  },
  {
    name: "Ravi Verma",
    email: "ravi@example.com",
    createdAt: "2024-09-15",
    role: "Loan Officer",
    status: "Suspended",
  },
  {
    name: "Anjali Desai",
    email: "anjali@example.com",
    createdAt: "2025-01-20",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Mohit Singh",
    email: "mohit@example.com",
    createdAt: "2024-12-05",
    role: "Support Agent",
    status: "Inactive",
  },
];


const userPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user...'/>
        <button className={styles.addButton}> Add </button>
      </div>
      <table className={styles.table} border="1" cellpadding="10" cellspacing="0">
        <thead className={styles.tableHeader}>
          <td><strong>Name</strong></td>
          <td><strong>Email</strong></td>
          <td><strong>Created At</strong></td>
          <td><strong>Role</strong></td>
          <td><strong>Status</strong></td>
          <td><strong>Action</strong></td>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || noavatar}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(2, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td className={
                    user.status === "Active"
                      ? "text-green-600"
                      : user.status === "Suspended"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
              >{user.status}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  )
}

export default userPage