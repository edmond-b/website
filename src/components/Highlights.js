import React from 'react'
import CardItem from './CardItem'
import './css/Highlights.css';

function Highlights() {
  return (
    <div className='cards'>
      <h1>Here Are Some Highlights</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/run-boris-run.jpg'
              text="Keep Covid at Bay"
              label="Run Boris Run"
              path='/placeholder'
            />
            <CardItem
              src="images/makersbnb.jpg"
              text="Makers x AirBnb"
              label="MakersBnB"
              path='/placeholder'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/acebook.jpg"
              text="Makers X Facebook"
              label="Acebook"
              path='/placeholder'
            />
            <CardItem
              src="images/code.jpg"
              text="Bank tech test"
              label="Bank Tech"
              path='/placeholder'
            />
            <CardItem
              src="images/blender.jpg"
              text="Delve into the world of 3D"
              label="3D Modeling"
              path='/placeholder'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}


export default Highlights;
