import React from 'react'
import SearchNav from '../navbars/SearchNav'
import styles from '../style-components/navbars-menupage/NavMenu.module.css'

function NavMenu() {
  return (
    <div className={styles.middleOne}>
        <div className={styles.gridOne}>
          <div className={styles.typeTextOne}>
              <h3>KINGFOOD</h3>
          </div>
          <div className={`${styles.navHome} ${styles.typeOne}`}>
              <SearchNav></SearchNav>
          </div>
          <div className={`${styles.shoppingCart} ${styles.typeOne}`}>
              <img src="/kingfood-img-icon/shopping-basket-fill.svg" alt="" />
          </div>
          <div className={`${styles.avatar} ${styles.typeOne}`}>
            <img src="/kingfood-img-icon/avatar.svg" alt="" />
          </div>
          <div className={styles.typeTextTwo}>
            <p>Kiên</p>
          </div>
        </div>
    </div>
  )
}

export default NavMenu