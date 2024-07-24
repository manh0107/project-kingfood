import React from 'react'
import NavMenu from '../components/navbars-menupage/NavMenu'
import Footer from '../components/footer/Footer'
import { MenuOptionDatas } from '../datas/menupages/MenuOptionDatas'
import MenuOption from '../components/itemsOfMenupage/MenuOption'
import styles from './style-pages/MenuPage.module.css'
import { OptionNavDatas } from '../datas/menupages/OptionNavDatas'
import OptionNav from '../components/navbars-menupage/OptionNav'
import { MenuCardDatas } from '../datas/menupages/MenuCardDatas'
import MenuCard from '../components/itemsOfMenupage/MenuCard'

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

        <div className={styles.middleFour}>
          <div className={styles.gridThree}>
            {MenuCardDatas.map((item) => (
              <MenuCard key={item.id} image={item.image} title={item.title} desc={item.desc} status={item.status} rate={item.rate} money={item.money} percent={item.percent} time={item.time}
              isStatusTrue={item.status === "Sẵn sàng"} isStatusFalse={item.status === "Tạm dừng"}
              ></MenuCard>
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