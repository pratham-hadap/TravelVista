import React from 'react'
import { Card } from './Card'

export const Tours = ({tours, removeTour}) => {
  return (
    <div className='tour-main-div'>
        <div className='heading'>
            <h2 >Plan With Pratham</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour) => {
                  return  <Card {...tour} key={tour.id} removeTour = {removeTour} />
                })
            }
        </div>
    </div>
  )
}
