import React from 'react'
import NavMenu from  '../components/navbars-menupage/NavMenu'
import styles from './style-pages/ShopCartPage.module.css'
import TableShopCart from '../components/itemsOfShopCartpage/TableShopCart'
import { MenuCardDatas } from '../datas/menupages/MenuCardDatas'
import Footer from '../components/footer/Footer'
import ShopCartCard from '../components/itemsOfShopCartpage/ShopCartCard'

function ShopCartPage() {
  return (
    <div>
        <div className={styles.middleOne}>
          <NavMenu></NavMenu>
        </div>

        <div className={styles.gridOne}>
          <div className={styles.typeImg}>
            <img src="/kingfood-img-icon/muitenbentrai.svg" alt="muiten" />
          </div>
          <div className={styles.typeText}>
            <p>Giỏ Hàng</p>
          </div>
        </div>
        
        <div className={styles.middleTwo}>
          <TableShopCart data={MenuCardDatas}></TableShopCart>
        </div>

        <div className={styles.middleThree}>
          <div className={styles.horizonLine}></div>
        </div>
        
        <div className={styles.gridTwo}>
          <div className={styles.gridThree}>
            <div className={styles.buttonOne}>
              <input type="text" placeholder='Nhập mã giảm giá' />
            </div>
            <div className={styles.buttonTwo}>
              <button>Áp Dụng</button>
            </div>
          </div>
          <div className={styles.buttonThree}>
            <button>Thêm Món Mới</button>
          </div>
        </div>

        <div className={styles.middleFour}>
          <div className={styles.gridFour}>
            <div className={styles.horizonLineOne}></div>
            <div className={styles.typeImgOne}>
              <img src="/kingfood-img-icon/shopcart.svg" alt="shopcart" />
            </div>
            <div className={styles.horizonLineOne}></div>
          </div>
        </div>

        <div className={styles.shopCart}>
          <ShopCartCard></ShopCartCard>
        </div>
        
        <div>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default ShopCartPage

