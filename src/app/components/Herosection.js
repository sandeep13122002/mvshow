import React from 'react'
import heroStyles from "@/app/styles/herosection.module.css"
import styles from "@/app/styles/common.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function Herosection({title,imageUrl}) {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
            <div className={styles.grid_two_section}>
                <div className={heroStyles.hero_content}>
                    <h1>{title}</h1>
                   <p>
                    From award-wining dramas to blockbuster action movies, we have got you covered.
                    our slection of the latest and greatest movies, and find your new favorite today.
                   </p>
                   <Link href="/movie">
                   <button>
                    Explore Movies
                   </button>
                   </Link>
                </div>
                <div className={heroStyles.hero_image}>
     <Image src={imageUrl} alt="home page netl" width={500}height={500}></Image>
                </div>
            </div>


      </div>





    </main>
  )
}
