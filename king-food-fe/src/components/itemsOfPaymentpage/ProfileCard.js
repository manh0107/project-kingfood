import React from 'react'
import styles from '../style-components/itemsOfPaymentpage/ProfileCard.module.css'

function ProfileCard() {
  return (
    <div>
      <div className={styles.boxOne}>
        <p>Phạm Quang Mạnh</p>
      </div>
      <div className={styles.boxOne}>
        <p>0393593761</p>
      </div>
      <div className={styles.boxOne}>
        <p>phamquangmanh0107@gmail.com</p>
      </div>
      <div className={styles.boxOne}>
        <p>Xâm Dương 1, xã Ninh Sở, huyện Thường Tín, Hà Nội</p>
      </div>
      <div className={styles.moreInfor}>
        <p>Thông Tin Thêm</p>
        <textarea type="text" name="" id="" placeholder='Ghi chú cho nhà hàng' />
      </div>
    </div>
  )
}

export default ProfileCard
