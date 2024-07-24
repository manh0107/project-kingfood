import React from 'react'
import styles from '../style-components/itemsOfMenupage/MenuCard.module.css'

function MenuCard(props) {
  return (
    <div className={styles.cardOne}>
        <div className={styles.menuCard}>
            <div className={styles.imgCard}>
                <img src={props.image} alt="" />
                <div className={styles.textCard}>
                    <p>{props.percent}</p>
                </div>
            </div>
            <div>
                <div className={styles.containerOne}>
                    <div className={styles.typeTextTwo}>
                        <p>{props.title}</p>
                    </div>
                    <div className={styles.containerTwo}>
                        <div className={styles.typeTextOne}>
                            <p>{props.rate}</p>
                        </div>
                        <div className={styles.typeImgOne}>
                            <img src="/kingfood-img-icon/Group.svg" alt="ngoisao" />
                        </div>
                    </div>
                </div>
                <div className={styles.containerThree}>
                    <div className={styles.typeTextThree}>
                        <p>{props.desc}</p>
                    </div>
                    <div className={styles.typeTextFour}>
                        <p>{props.money}</p>
                    </div>
                </div>
                <div className={styles.containerFour}>
                    <div className={`${styles.typeTextFive} ${props.isStatusTrue ? styles.statusTrue : ''} ${props.isStatusFalse ? styles.statusFalse : ''}`}>
                        <p>{props.status}</p>
                    </div>
                    <div className={styles.typeTextSix}>
                        <p>{props.time}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuCard
