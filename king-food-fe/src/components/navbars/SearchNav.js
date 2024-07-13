import React from 'react'
import styles from '../style-components/navbars/SearchNav.module.css'

function SearchNav() {
  return (
    <div className={styles.searchNav}>
        <div className={styles.gridOne}>
            <div>
              <img src="/kingfood-img-icon/iconplace.svg" alt="" />
            </div>
            <div>
                <p>KINGFOOD, số 1 Hùng Vương, Ba Đình</p>
            </div>
            <div>
              <img className={styles.imgOne} src="/kingfood-img-icon/muitenxuong.svg" alt="" />
            </div>
        </div>
        <div className={styles.collum}></div>
        <div className={styles.gridTwo}>
            <div>
              <img src="/kingfood-img-icon/search-icon.svg" alt="" />
            </div>
            <div>
              <input placeholder='Tìm kiếm nhà hàng hoặc món ăn...'></input>
            </div>
        </div>
    </div>
  )
}

export default SearchNav