import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ServiceCards() {
  return (
      <>
    <div className='cards'>
      <h1>Choose a service to get started.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/HouseCleaning.jpg'
              text='House Cleaning and Services'
              label='Services'
              path='/'
            />
            <CardItem
              src='images/furnitureAssemble.jpg'
              text='Furniture Assembly and Carpentry'
              label='Services'
              path='/'
            />
            <CardItem
              src='images/Plumbing.jpg'
              text='Plumbing'
              label='Services'
              path='/'
            />
            <CardItem
              src='images/Electrician.jpg'
              text='Electronic Works'
              label='Services'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Cooking.jpg'
              text='Cooking and Dish Washing '
              label='Services'
              path='/'
            />
            <CardItem
              src='images/MenSaloon.jpg'
              text='Men Salon and Services'
              label='Services'
              path='/'
            />
            <CardItem
              src='images/WomanSalon.jpg'
              text='Women Salon and Services'
              label='Services'
              path='/'
            />
            <CardItem
              src='images/Painting.jpg'
              text='Painting'
              label='Services'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default ServiceCards;
