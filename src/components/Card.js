function Card({card, clickOnCard, state, isThisCardOpen}) {

  function handleClickOnCard() {
    clickOnCard(card);
  }

  return (
    <section className='card hover'>
      {isThisCardOpen ? 
      <div style={{backgroundColor: card.color}} className="card__opened"></div>
      :
      <div onClick={handleClickOnCard} className="card__closed"></div>
      }
    </section>
  )
}

export default Card;