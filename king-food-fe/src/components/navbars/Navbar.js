import React from 'react'
import SearchNav from './SearchNav'
import styles from '../style-components/navbars/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.backgroundOne}>
        <div className={styles.navbarOne}>
            <h3>KINGFOOD</h3>
            <div>
                <button className={styles.buttonLog}>Đăng nhập</button>
                <button>Đăng ký</button>
                <button>Đặt món</button>
            </div>
        </div>
        <div className={styles.navbarTwo}>
            <h1>KINGFOOD</h1>
            <h2>Khám phá những món ăn và đồ uống tốt nhất tại KINGFOOD</h2>
        </div>
        <div className={styles.searchNavCon}>
            <div></div>
            <div>
                <SearchNav></SearchNav>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Navbar
