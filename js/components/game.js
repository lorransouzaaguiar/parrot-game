import { Card } from '../model/card.js'

export const GameComponent = () => {

    let numberOfMoves = 0

    const getCardsFromDOM = () => {
        const cardsObject = document.querySelectorAll('.card-wrapper')
        const cardElement = Object.values(cardsObject)
        const cards = cardElement.map(el => Card(el))
        return cards
    }

    const cardComponentButton = () => {
        const cards = getCardsFromDOM()
        cards.forEach(card => {

            card.element.onclick = () => {
                if (!card.isOpen) {
                    card.element.classList.toggle('is-flipped', true);
                    card.isOpen = true
                    const otherCards = cards.filter(c => c.element.getAttribute('id') !== card.element.getAttribute('id'))
                    activeButtonWhenEqualCardIsFound(otherCards, card)
                    flipCardBackWhenCardIsDifferent(otherCards, card)
                }

                const allCardsOpen = cards.every(card => card.isOpen)

                if (allCardsOpen) {
                    alert(`Você ganhou em ${numberOfMoves} jogadas!`)
                }

            }

        })
    }

    const getImageFromCardElement = (element) => {
        return element.children[1].children[0].getAttribute('src')
    }

    const flipCardBackWhenCardIsDifferent = async (otherCards, currentCard) => {
        const cardClickedBefore = otherCards.find(c => c.isOpen && c.isFoundPair === false)

        if (cardClickedBefore) {
            if (getImageFromCardElement(cardClickedBefore.element) !== getImageFromCardElement(currentCard.element)) {

                numberOfMoves += 1

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

            numberOfMoves += 1

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

    cardComponentButton()

}