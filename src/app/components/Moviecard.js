import React from 'react'
import styles from "@/app/styles/common.module.css"
import Image from 'next/image';
import Link from 'next/link';
export default function Moviecard(curr) {
    const{id,type,title,synopsis}=curr.jawSummary;
  
  return (
   <>
   <div className={styles.card}>
     <div className={styles.card_image}>
    <Image src={curr.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
    
     </div>
     <div className={styles.card_data}>
           <h2>{title.substring(0,18)}</h2>
           <p>
            {synopsis.substring(0,66)}
           </p>
           <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
     </div>
   </div>
   
   </>
  )
}

