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
    .map((card) => ({...card, id: Math.random(), isOpen: false}))
    return randomizedCards;
}

const initialState = {allCards: randomizeCards(),
                      cardIsOpen: [],
                      firstCard: null,
                      secondCard: null,
                      firstCardColor: null,
                      secondCardColor: null};

export { initialState, randomizeCards};