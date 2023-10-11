import Link from 'next/link'
import React from 'react'
import Moviecard from '../components/Moviecard';
import styles from "@/app/styles/common.module.css"
export default async function sjdhihnvjsdghb() {

  const url ='https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '40fda2073amshbd978abc00102a6p11aeb3jsnce974a4123a0',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  
const res= await fetch(url,options);
const data=await res.json();
const maindata=data.titles;



  return (
    <>


    <section className={styles.movieSection}>
    <div className={styles.container}>
      <h1>Series and Movie</h1>
      <div className={styles.card_section}>

      {
        maindata.map((curr)=>{
            return <Moviecard key={curr.id} {...curr}/>
        }
        )
      }


      </div>
      
      </div>
      </section>
    </>
  )
}
