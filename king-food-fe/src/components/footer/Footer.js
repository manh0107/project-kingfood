import React from 'react'
import styles from '../style-components/footer/Footer.module.css'

function Footer() {
  return (
    <div className={styles.colorBack}>
        <div className={styles.fontTextOne}>
            <h4>KINGFOOD</h4>
        </div>
        <div className={styles.middleOne}>
            <div className={styles.gridOne}>
                <div className={styles.fontTextTwo}>
                    <h5>GIỚI THIỆU VỀ KINGFOOD</h5>
                    <p>Chúng tôi là ai</p>
                    <p>Blog</p>
                    <p>Làm việc với chúng tôi</p>
                    <p>Nhà đầu tư</p>
                    <p>Báo cáo vi phạm</p>
                    <p>Bộ công cụ báo chí</p>
                    <p>Liên hệ</p>
                </div>
                <div className={styles.fontTextTwo}>
                    <h5>DÀNH CHO NHÀ HÀNG</h5>
                    <p>Hợp tác với chúng tôi</p>
                    <p>Ứng dụng dành cho bạn</p>
                </div>
                <div className={styles.fontTextTwo}>
                    <h5>TÌM HIỂU THÊM</h5>
                    <p>Chính sách bảo mật</p>
                    <p>Bảo mật</p>
                    <p>Điều khoản và điều kiện</p>
                    <p>Bản đồ website</p>
                </div>
                <div className={styles.fontTextTwo}>
                    <h5>Liên kết mạng xã hội</h5>
                    <div className={styles.sizeImgOne}>
                        <img src="/kingfood-img-icon/youtube.svg" alt="" />
                        <img src="/kingfood-img-icon/in.svg" alt="" />
                        <img src="/kingfood-img-icon/twitter.svg" alt="" />
                        <img src="/kingfood-img-icon/face.svg" alt="" />
                        <img src="/kingfood-img-icon/instagram.svg" alt="" />
                    </div>
                    <div className={styles.sizeImg}>
                        <img src="/kingfood-img-icon/Google Play.svg" alt="GooglePlay" />
                    </div>
                    <div className={styles.sizeImg}>
                        <img src="/kingfood-img-icon/App Store.svg" alt="AppStore" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.collumOne}></div>
        <div className={styles.fontTextThree}>
            <p>KINGFOOD@2024. Bản quyền thuộc về KINGFOOD.</p>
        </div>
    </div>
  )
}

export default Footer