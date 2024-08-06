import React from 'react';
import DataTable from 'react-data-table-component';
import styles from '../style-components/itemsOfShopCartpage/TableShopCart.module.css'

function TableShopCart({ data }) {
    const columns = [
        {
            name: 'Tên món',
            cell: row => (
                <div className={styles.gridOne}>
                    <div className={styles.imgOne}>
                        <img src={row.image} alt={row.title} />
                    </div> 
                    <div className={styles.textOne}>
                        <p>{row.title}</p>
                    </div>
                </div>        
            ),
        },
        {
            name: 'Số lượng',
            cell: row => (
                <div className={styles.gridTwo}>
                    <div className={`${styles.numberOne} ${styles.boxOne}`}>
                        <p>-</p>
                    </div>
                    <div className={styles.numberTwo}>
                        <input type="text" value="0" />
                    </div>
                    <div className={`${styles.numberOne} ${styles.boxTwo}`}>
                        <p>+</p>
                    </div>
                </div>        
            ),
        },
        {
            name: 'Đơn giá',
            cell: row => (
                <div className={styles.moneyOne}>
                    <p>{row.money}VNĐ</p>
                </div>        
            ),
            sortable: true,
        },
        {
            name: 'Tổng tiền',
            cell: row => (
                <div className={styles.moneyTwo}>
                    <p>{row.money}VNĐ</p>
                </div>        
            ),
            sortable: true,
        },
        {
            name: 'Thao tác',
            cell: row => (
                <div className={styles.gridThree}>
                    <div className={styles.imgTwo}>
                        <img src="/kingfood-img-icon/addshoppingcart.png" alt="addshopping" />
                    </div>
                    <div className={styles.imgThree}>
                        <img src="/kingfood-img-icon/thungrac.png" alt="thungrac" />
                    </div>
                </div>        
            ),
        },
    ];

    const customStyles = {
        headCells: {
            style: {
                fontWeight: 700,
                fontSize: 20,
                justifyContent: 'center',
            },
        },
        cells: {
            style: {
                justifyContent: 'center',
                fontSize: 17,
            },
        },
    };
    
    return (
        <div className={styles.tableOne}>
            <DataTable 
            columns={columns} 
            data={data} 
            customStyles={customStyles} />
        </div>
    );
}

export default TableShopCart;
