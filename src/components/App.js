import React, { useEffect, useState } from 'react';
import Card from './Card';
//import { useReducer } from 'react';

function App() {
  const [cards, setCards] = useState([]);

  const cardsColors = [
    {'color': '#00FFFF'},
    {'color': '#F08080'},
    {'color': '#ADFF2F'},
    {'color': '#FFD700'},
    {'color': '#8A2BE2'},
    {'color': '#BC8F8F'},
    {'color': '#2F4F4F'},
    {'color': '#C0C0C0'},
  ];

  function randomizeCards() {
    const randomizedCards = [...cardsColors, ...cardsColors]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
    setCards(randomizedCards);
    return 
  }

  /**useEffect(() => {
    randomizeCards();
  },[]);*/

  console.log(cards);

  return (
    <div className='page'>
      <h1 className='page__title'>Tiles game by Alina Potapchuk</h1>
      <button onClick={randomizeCards} className='page__btn hover'>Start new game!</button>
      <section className='cards'>
        {cards.map((card) => {
          return (
            <Card />
          )    
        })}
      </section>
    </div> 
  );
}

export default App;
