import React from 'react'
import styles from '../style-components/itemsOfMenupage/MenuOption.module.css'

function MenuOption(props) {
  return (
    <div className={styles.typeCard}>
        <div className={styles.typeImg}>
            <img src={props.image} alt="" />
        </div>
        <div className={styles.typeText}>
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default MenuOption