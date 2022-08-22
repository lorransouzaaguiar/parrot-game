import { MainComponent } from './components/main.js'
import { Card } from './model/card.js'
import { isPar } from './utils/par.js'

(function App() {

    let numberOfCards = 0

    do {
        numberOfCards = prompt('Insira a quantidade de cartas do jogo (Apenas numeros pares menores que 14)')
    } while (!isPar(numberOfCards) || numberOfCards < 4 || numberOfCards > 14)

    MainComponent().render(numberOfCards)

    const cardsObject = document.querySelectorAll('.card-wrapper')
    const cardElement = Object.values(cardsObject)
    const cards = cardElement.map(el => Card(el))

    cards.forEach(card => {

        card.element.onclick = () => {
            if (card.isOpen) {
                card.element.classList.toggle('is-flipped');
                card.isOpen = false
            } else {
                card.element.classList.toggle('is-flipped', true);
                card.isOpen = true
                const otherCards = cards.filter(c => c.element.getAttribute('id') !== card.element.getAttribute('id'))
                activeButtonWhenEqualCardIsFound(otherCards, card)
                flipCardBackWhenCardIsDifferent(otherCards, card)
            }

        }

    })

    const getImageFromCardElement = (element) => {
        return element.children[1].children[0].getAttribute('src')
    }

    const flipCardBackWhenCardIsDifferent = (otherCards, currentCard) => {
        const cardClickedBefore = otherCards.find(c => c.isOpen && c.isFoundPair === false)

        if (cardClickedBefore) {
            if (getImageFromCardElement(cardClickedBefore.element) !== getImageFromCardElement(currentCard.element)) {

                setTimeout(() => {
                    cardClickedBefore.element.classList.toggle('is-flipped');
                    currentCard.element.classList.toggle('is-flipped');
                    cardClickedBefore.isOpen = false
                    currentCard.isOpen = false
                }, 1000)
            }

        }
    }

    const activeButtonWhenEqualCardIsFound = (otherCards, currentCard) => {
        const foundCardEqual = otherCards.find(card => {
            const imgBackFacePath = getImageFromCardElement(card.element)
            const currentImgBackFacePath = getImageFromCardElement(currentCard.element)
            return imgBackFacePath === currentImgBackFacePath && card.isOpen
        })

        if (foundCardEqual) {
            currentCard.isFoundPair = true
            foundCardEqual.isFoundPair = true

            currentCard.element.onclick = () => {
                currentCard.element.classList.toggle('is-flipped', true);
                foundCardEqual.element.classList.toggle('is-flipped', true)
            }

            foundCardEqual.element.onclick = () => {
                currentCard.element.classList.toggle('is-flipped', true);
                foundCardEqual.element.classList.toggle('is-flipped', true)
            }
        }
    }


})()