import React from 'react'
import styles from '../style-components/profile/NavProfile.module.css'

function NavProfile() {
  return (
    <div className={styles.gridOne}>
      <div className={styles.gridTwo}>
        <div className={styles.avatarOne}>
            <img src="/kingfood-img-icon/avatar.svg" alt="avatar" />
        </div>
        <div className={styles.profileOne}>
            <p>Phạm Quang Mạnh</p>
            <div className={styles.gridThree}>
                <div className={styles.placeOne}>
                    <img src="/kingfood-img-icon/icon-diachitrang.svg" alt="" />
                </div>
                <div className={styles.placeTwo}>
                    <p>Việt Nam</p>
                </div>
            </div>
        </div>
      </div>
      <div className={styles.typeBoder}>
        <div className={styles.boderOne}>
            <p>Chỉnh sửa hồ sơ</p>
        </div>
      </div>
    </div>
  )
}

export default NavProfile
