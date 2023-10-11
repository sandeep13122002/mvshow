import React from 'react';
import ContactCard from '../components/ContactCard';
import styles from "./contact.module.css";
import ContactForm from '../components/ContactForm';
export default function contact() {
  return (
    <>
    <div className={styles.container}>

    <h1>Contact Us</h1>
    <ContactCard/>
     <section className={styles.contact_section}>

    <h2>we'd love  to hear <span>from you</span></h2>

       <ContactForm/>
     </section>

       </div>

       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29747.011353976373!2d81.56595367431638!3d21.256562499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddfd7976f793%3A0x7b518b9fe6df1da7!2sB.D.M.%20Hostel!5e0!3m2!1sen!2sin!4v1697036586260!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
    </>
  )
}
