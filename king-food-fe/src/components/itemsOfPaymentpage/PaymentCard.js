import React from 'react'
import styles from '../style-components/itemsOfPaymentpage/PaymentCard.module.css'

function ShopCartCard() {
    return (
        <div className={styles.abateCard}>
            <div className={styles.textOne}>
                <p>Thông Tin Đơn Hàng</p>
            </div>
            <div className={styles.horizonLine}></div>
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p><strong>Sản phẩm</strong></p>
                </div>
                <div className={styles.moneyOne}>
                    <p><strong>Tổng tiền</strong></p>
                </div>
            </div>
            <div className={styles.horizonLine}></div>
            {/* Những món ăn đã đặt */}
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p>Nhân lẩu bò thập cẩm</p>
                </div>
                <div className={styles.moneyOne}>
                    <p>345.000VNĐ</p>
                </div>
            </div>
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p>Dom Perignon Vintage 2002</p>
                </div>
                <div className={styles.moneyOne}>
                    <p>11.100.000VNĐ</p>
                </div>
            </div>
            <div className={styles.horizonLine}></div>
            <div className={styles.gridOne}>
                <div className={styles.textTwo}>
                    <p>Tổng tiền sản phẩm</p>
                </div>
                <div className={styles.moneyOne}>
                    <p>11.445.000VNĐ</p>
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
                    <p>VAT (10%)</p>
                </div>
                <div className={styles.moneyOne}>
                    <p>1.144.500VNĐ</p>
                </div>
            </div>
            <div className={styles.horizonLine}></div>
            <div className={`${styles.gridOne} ${styles.maBottom}`}>
                <div className={styles.textTwo}>
                    <p>Tổng tiền</p>
                </div>
                <div className={styles.moneyOne}>
                    <p><strong>12.244.500</strong>VNĐ</p>
                </div>
            </div>
            <div className={styles.typeCheckbox}>
                <p>
                    <input type="checkbox" />
                    <label>Xác nhận thanh toán</label>
                </p>
            </div>
            <div className={styles.buttonOne}>
                <button>Đặt đơn</button>
            </div>
        </div>
    )
}

export default ShopCartCard
