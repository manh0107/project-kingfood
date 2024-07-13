import React from 'react'
import Navbar from '../components/navbars/Navbar'
import { OptionDatas } from '../datas/OptionDatas'
import Options from '../components/itemsOfHomepage/Options'
import { ListDatas } from '../datas/ListDatas'
import Lists from '../components/itemsOfHomepage/Lists'
import { ListPlaceDatas } from '../datas/ListPlaceDatas'
import ListPlaces from '../components/itemsOfHomepage/ListPlaces'
import Footer from '../components/footer/Footer'
import styles from './style-pages/HomePage.module.css'

function HomePage() {
  return (
    <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className={styles.middleOption}>
          <div className={styles.gridOption}>
            {OptionDatas.map((item) => (
              <Options key={item.id} image={item.image} title={item.title} desc={item.desc}></Options> 
            ))}
          </div>
        </div>
        <div>
            <div>
              <div>
                <p>Danh sách</p>
              </div>
              <div>
                <p>Khám phá các danh sách được chọn lọc hàng đầu tại KINGFOOD, dựa trên các xu hướng.</p>
                <div>
                  <p>Tất cả danh sách của KINGFOOD</p>
                  <img src="/kingfood-img-icon\arrow-right-s-line.png" alt=""></img>
                </div>
              </div>
            </div>
            <div>
              {ListDatas.map((item) => (
                <Lists key={item.id} image={item.image} title={item.title} desc={item.desc}></Lists>
              ))}
            </div>
        </div>
        <div>
          {ListPlaceDatas.map((item) => (
            <ListPlaces key={item.id} title={item.title} desc={item.desc}></ListPlaces>
          ))}
          <p>Xem thêm</p>
        </div>
        <div>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default HomePage