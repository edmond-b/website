import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check this out</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text="Keep Covid at Bay"
              label="Run Boris Run"
              path='/run-boris-run'
            />
            <CardItem
              src="images/img-2.jpg"
              text="Makers x AirBnb"
              label="MakersBnB"
              path='/MakersBnB'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="Makers X Facebook"
              label="Acebook"
              path='/run-boris-run'
            />
            <CardItem
              src="images/img-4.jpg"
              text="Bank tech test"
              label="Bank Tech"
              path='/MakersBnB'
            />
            <CardItem
              src="images/img-6.jpg"
              text="Delve into the 3D world"
              label="3D Modeling"
              path='/MakersBnB'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Cards;
