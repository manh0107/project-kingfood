import React from 'react'

function ListPlaces(props) {
  return (
    <div>
        <div>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
        <div>
            <img src="/kingfood-img-icon/arrow-right-s-line.png" alt="" />
        </div>
    </div>
  )
}

export default ListPlaces