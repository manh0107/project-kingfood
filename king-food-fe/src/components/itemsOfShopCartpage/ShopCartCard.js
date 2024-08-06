import React from 'react'
import styles from '../style-components/itemsOfShopCartpage/ShopCartCard.module.css'

function ShopCartCard() {
    return (
        <div className={styles.abateCard}>
            <div className={styles.textOne}>
                <p>Giỏ Hàng</p>
            </div>
            <div className={styles.horizonLine}></div>
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p>Tổng tiền sản phẩm</p>
                </div>
                <div className={styles.moneyOne}>
                    <p>11.450.000VNĐ</p>
                </div>
            </div>
            <div className={styles.horizonLine}></div>
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p>Giao Hàng</p>
                </div>
                <div className={styles.moneyOne}>
                    <p>Tại quán</p>
                </div>
            </div>
            <div className={styles.horizonLine}></div>
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p>Giảm giá</p>
                </div>
                <div className={styles.moneyOne}>
                    <p>0VNĐ</p>
                </div>
            </div>
            <div className={styles.horizonLine}></div>
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p>Tổng(tạm tính)</p>
                </div>
                <div className={styles.moneyOne}>
                    <p><strong>11.450.000</strong>VNĐ</p>
                </div>
            </div>
            <div className={styles.buttonOne}>
                <button>Thanh Toán</button>
            </div>
        </div>
    )
}

export default ShopCartCard
