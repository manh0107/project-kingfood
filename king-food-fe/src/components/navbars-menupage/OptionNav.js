import React from 'react'
import styles from '../style-components/navbars-menupage/OptionNav.module.css'

function OptionNav(props) {
  return (
    <div className={`${styles.typeCard} ${props.isSpecial ? styles.typeTitle : ''}`}>
        <div className={styles.gridOne}>
            <div className={styles.typeImg}>
                <img src={props.image} alt="" />
            </div>
            <div className={`${styles.typeText} ${props.isSpecial ? styles.typeTitle : ''}`}>
                <p>{props.title}</p>
            </div>
        </div>
    </div>
  )
}

export default OptionNav