import React from 'react'
import styles from '../style-components/itemsOfHomepage/ListPlaces.module.css'

function ListPlaces(props) {
  return (
    <div className={styles.cardSize}>
        <div className={styles.typeText}>
            <p className={styles.fontTextOne}>{props.title}</p>
            <p className={styles.fontTextTwo}>{props.desc}</p>
        </div>
        <div>
            <img src="/kingfood-img-icon/arrow-right-s-line.png" alt="" />
        </div>
    </div>
  )
}

export default ListPlaces