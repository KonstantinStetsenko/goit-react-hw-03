import React from "react";
import styles from './contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
export default function Contact({ id, name, phone, onDelete}) {
  return (
    <div className={styles.cardContact}>
      <div className={styles.formContact}>
        <div className={styles.contactName}><FaUser className={styles.user} size={24} />{name}</div>
        <div className={styles.contactPhone}><FaPhone className={styles.phone} size={24} />{ phone}</div>
      </div>
      <button className={styles.buttonDel} onClick={()=>onDelete(id)}>Delete</button>
    </div>
  );
}
