import React from 'react'
import NavMenu from '../components/navbars-menupage/NavMenu'
import Footer from '../components/footer/Footer'
import { MenuOptionDatas } from '../datas/menupages/MenuOptionDatas'
import MenuOption from '../components/itemsOfMenupage/MenuOption'
import styles from './style-pages/MenuPage.module.css'
import { OptionNavDatas } from '../datas/menupages/OptionNavDatas'
import OptionNav from '../components/navbars-menupage/OptionNav'

function MenuPage() {
  return (
    <div>
        <div className={styles.middleOne}>
          <NavMenu></NavMenu>
        </div>

        <div className={styles.middleThree}>
          <div className={styles.gridTwo}>
            {OptionNavDatas.map((item) => (
              <OptionNav key={item.id} image={item.image} title={item.title} isSpecial={item.id === 3}></OptionNav>
            ))}
          </div>
        </div>

        <div className={styles.middleTwo}>
          <div className={styles.typeTextOne}>
            <p>CẢM HỨNG CHO THỰC ĐƠN CỦA BẠN</p>
          </div>
          <div className={styles.gridOne}>
            {MenuOptionDatas.map((item) => (
              <MenuOption key={item.id} image={item.image} title={item.title}></MenuOption>
            ))}
          </div>
        </div>

        <div>
          <Footer></Footer>
        </div>

    </div>
  )
}

export default MenuPage