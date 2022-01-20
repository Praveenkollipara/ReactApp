import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Rent.jpg'
              text='LOOKING FOR A SWEETHOME! CLICK HERE >'
              label='Rental'
              path='/Rent'
            />
            <CardItem
              src='images/services.jpg'
              text='LOOKING FOR HOUSE SERVICES! CLICK HERE >'
              label='Services'
              path='/services'
            />
            <CardItem
              src='images/PackersMovers.jpg'
              text='LOOKING FOR PACKERS&MOVERS ! CLICK HERE >'
              label='PM'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
