import React from 'react'
import styles from '../style-components/itemsOfHomepage/Lists.module.css'

function Lists(props) {
  return (
    <div className={styles.listOne}>
        <div className={styles.listTwo}>
            <img src={props.image} alt=""></img>
            <p className={styles.textOne}>{props.title}</p>
            <p className={styles.textTwo}>{props.desc}</p>
        </div>
    </div>
  )
}

export default Lists