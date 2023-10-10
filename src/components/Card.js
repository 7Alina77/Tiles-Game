import { useState } from "react";

function Card({card, clickOnCard, state}) {
  const [isCardOpened, setIsCardOpened] = useState(state.isOpen)

  function handleClickOnCard() {
    clickOnCard(card);
    setIsCardOpened(true)
  }

  return (
    <section className='card hover'>
      {isCardOpened ? 
      <div style={{backgroundColor: card.color}} className="card__opened"></div>
      :
      <div onClick={handleClickOnCard} className="card__closed"></div>
      }
    </section>
  )
}

export default Card;