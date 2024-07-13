import React from 'react'
import styles from '../style-components/itemsOFHomepage/Options.module.css'

function Options(props) {
  return (
    <div className={styles.cardOne}>
      <div className={styles.cardFit}>
        <div>
          <img src={props.image} alt=""></img>
        </div>
        <div>
          <p className={styles.fontWeight}>{props.title}</p>
          <p className={styles.fontSize}>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Options