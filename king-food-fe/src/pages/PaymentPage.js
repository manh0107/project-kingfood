import React from 'react'
import NavMenu from '../components/navbars-menupage/NavMenu'
import Footer from '../components/footer/Footer'
import styles from './style-pages/PaymentPage.module.css'
import PaymentCard from '../components/itemsOfPaymentpage/PaymentCard'
import ProfileCard from '../components/itemsOfPaymentpage/ProfileCard'

function PaymentPage() {
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
                <p>Thanh Toán</p>
            </div>
        </div>

        <div className={styles.middleFour}>
          <div className={styles.gridFour}>
            <div className={styles.horizonLineOne}></div>
            <div className={styles.typeImgOne}>
              <img src="/kingfood-img-icon/file-list-3-line.svg" alt="paymentcart" />
            </div>
            <div className={styles.horizonLineOne}></div>
          </div>
        </div>

        <div className={styles.gridTwo}>
            <div className={styles.proCard}>
                <ProfileCard></ProfileCard>
            </div>
            <div className={styles.payCard}>
                <PaymentCard></PaymentCard>
            </div>
        </div>

        <div>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default PaymentPage
