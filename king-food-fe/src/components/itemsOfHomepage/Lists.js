import React from 'react'
import styles from '../style-components/itemsOFHomepage/Lists.module.css'

function Lists(props) {
  return (
    <div>
        <div>
            <img src={props.image} alt=""></img>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Lists