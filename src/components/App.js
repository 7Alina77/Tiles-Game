import React, { useEffect, useReducer, useState } from 'react';
import Card from './Card';
import {cardsColors, initialState} from '../constants/constants';

function App() {
  const [cards, setCards] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state.firstCardColor, state.secondCardColor)
    if(state.firstCardColor && state.secondCardColor) {
      if (state.firstCardColor === state.secondCardColor) {
        console.log("same");
      } else {
        console.log('not same');
      }
    }
  },[state]);
  
  function reducer(state, action) {
    switch(action.type) {
      case 'click':
        if(state.firstCardColor !== null && state.firstCardColor !== undefined) {
          return {
            isOpen: true,
            firstCardColor: state.firstCardColor,
            secondCardColor: action.card.color,
          }
        } else {
        return {
          isOpen: true,
          firstCardColor: action.card.color,
          secondCardColor: null,
        }
        }
    }
    switch(action.type) {
      case 'reset':
        return {
          isOpen: false,
          firstCardColor: null,
          secondCardColor: null,
        }
    }
  }

  function randomizeCards() {
    dispatch ({
      type: 'reset',
    })
    const randomizedCards = [...cardsColors, ...cardsColors]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random(), state: state.isOpen}))
    setCards(randomizedCards);
  }

  function clickOnCard(card) {
    dispatch({
      type: 'click',
      card,
    })
  }

  return (
    <div className='page'>
      <h1 className='page__title'>Tiles game by Alina Potapchuk</h1>
      <button onClick={randomizeCards} className='page__btn hover'>Start new game!</button>
      <section className='cards'>
        {cards.map((card) => {
          return (
            <Card clickOnCard={clickOnCard} key={card.id} card={card} state={state}/>
          )    
        })}
      </section>
    </div> 
  );
}

export default App;
