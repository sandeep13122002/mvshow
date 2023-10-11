import React from 'react'
import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link'
export default function Nav() {
  return (
    <nav className={styles.navbar}>
     <div >
     <ul className={styles.navbarList}>
           <li className={styles.navbarItem}>
        <Link href="/">Home</Link>
             </li>

             <li className={styles.navbarItem}>
        <Link href="/about">About</Link>
             </li>
             <li className={styles.navbarItem}>
        <Link href="/movie">Movie</Link>
             </li>
             <li className={styles.navbarItem}>
        <Link href="/contact">contact</Link>
             </li>

     </ul>
     </div>
   

    </nav>
  )
}
