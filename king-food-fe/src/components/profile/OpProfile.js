import React from 'react'
import styles from '../style-components/profile/OpProfile.module.css'

function OpProfile(props) {
  return (
    <div className={styles.typeBorder}>
        <div className={styles.styleCard}>
            <img src={props.image} alt="" />
            <p className={props.specialIt ? styles.specialText: ''}>{props.title}</p>
        </div>
    </div>
  )
}

export default OpProfile
