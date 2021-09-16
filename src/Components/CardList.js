import React from 'react'

import Moment from 'react-moment'

export default function CardList ({ extendedforcast }) {
  const newData = extendedforcast.list.filter((item, index) => index % 8 === 0)

  const [weather] = newData

  if (weather.description === 'clear sky') {
    console.log('sell umbrells')
  }


  return (
    <div>
      <div className='d-flex flex-row flex-wrap w-50 mx-auto '>
        {newData.map((item, index) => {
          return (
            <div
              className='card mx-2 my-4 shadow rounded-lg mx-auto'
              style={{ width: '18rem' }}
              key={index}
            >
              <p className='day'>
                <Moment date={item.dt_txt} parse='YYYY-MM-DD' />
                <p>{item.main.temp}</p>
                <div className='d-fle justify-content-start'>
                  <p>Max: {item.main.temp_max}</p>
                  <p>Min: {item.main.temp_min}</p>
                </div>
                <p>
                  {item.weather.map(items => {
                    return <h1>{items.description}</h1>
                  })}
                </p>
              </p>
            </div>
          )
        })}
      </div>
      <div>
        <h1>Best day to sell umbrella </h1>
        <h1>Best day to sell jacket </h1>
      </div>
    </div>
  )
}
