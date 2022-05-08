import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/teaCategory.jpg"
                    text="Feel the taste of Ceylon Tea"
                    label="Tea"
                    path="/tea"
                />
                <CardItem
                    src="images/spicesCategory.jpg"
                    text="Enjoy you meal with Ceylon Spices"
                    label="Spices"
                    path="/spices"
                />
                <CardItem
                    src="images/textileCategory.jpg"
                    text="Dress Like a Gentlemen"
                    label="Apparel & Textile"
                    path="/apparel"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src="images/gemCategory.jpg"
                    text="Wear Like a Queen"
                    label="Gem & Jewelry"
                    path="/gem"
                />
                <CardItem
                    src="images/coconutCategory.jpg"
                    text="Products made by Coconut"
                    label="Coconut Products"
                    path="/coconut"
                />
                <CardItem
                    src="images/rubberCategory.jpg"
                    text="Products made by Rubber"
                    label="Rubber Products"
                    path="/rubber"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
