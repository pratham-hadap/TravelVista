import { useState } from "react"
import React  from 'react'

export const Card = ({id, name, info, image, price, removeTour}) => {
    const [readmore, setReadmore]=useState(false);
    let description = readmore ? info : `${info.substring(0,200)}.........`;

    function readmoreHandler(){
        setReadmore(!readmore)
    }

  return (
    <div className="card">
        <div >
            <img className="image" src={image} alt='ToursImage' />
        </div>
         <div className="tour-info">
         <div >
            <div className="tour-price">{price}</div>
         </div>
         <div className="tour-name">
            <div>{name}</div>
         </div>
         <div>
            <div>
            {description}
            <span className="read-more" onClick={readmoreHandler} >{readmore ? `showLess`: `readMore` }</span>
            </div>
         </div>
        </div>
        <div>
            <button className="btn-red" onClick={() => removeTour(id)}>Not Intrested</button>
        </div>
        
    </div>
  )
}
