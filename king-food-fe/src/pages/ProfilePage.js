import React from 'react'
import NavMenu from '../components/navbars-menupage/NavMenu'
import Footer from '../components/footer/Footer'
import styles from '../pages/style-pages/ProfilePage.module.css'
import NavProfile from '../components/profile/NavProfile'
import { OpProfileDatas } from '../datas/profile/OpProfileDatas'
import OpProfile from '../components/profile/OpProfile'

function ProfilePage() {
  return (
    <div>
      <div className={styles.middleOne}>
        <NavMenu></NavMenu>
      </div>
      <div className={styles.middleTwo}>
        <NavProfile></NavProfile>
      </div>
      <div className={styles.middleThree}>
        <div className={styles.gridOne}>
          {OpProfileDatas.map((item) => (
            <OpProfile key={item.id} image={item.image} title={item.titile} specialIt={item.id === 3}></OpProfile>
          ))}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default ProfilePage
