import { dealWithImages } from './deal-with-images.js'
import { CardComponent } from './components/card.js'

const inputUser = 6

const Card = (id, img, isOpen = false) => ({
    id, isOpen, img
})

const MainComponent = () => {
    const main = document.querySelector('main')

    const gernerateCardList = (length) => {
        const image = dealWithImages(length)
        const randomImagePaths = image.getRandomImagePaths()
        const cardList = []

        randomImagePaths.forEach((imagePath, index) => {
            const id = index + 1
            const img = imagePath
            const card = Card(id, img)
            cardList.push(card)
        })

        return cardList
    }

    const renderCardComponentList = (length) => {
        const cardList = gernerateCardList(length)

        const toggle = (card, cardComponent) => {
            if (!card.isOpen) {
                cardComponent.classList.toggle('is-flipped', true);
                card.isOpen = true
            } else {
                const otherCards = cardList.filter(s => s.id !== card.id)
                const foundCard = otherCards.find(c =>
                    c.img === card.img && c.isOpen === card.isOpen)

                if (foundCard) {
                    card.isOpen = true
                } else {
                    cardComponent.classList.toggle('is-flipped', false);
                    card.isOpen = false
                }
            }
        }

        const cardComponentList = cardList.map(card => {
            const cardComponent = CardComponent({
                faceBackImg: card.img,
                onclick: () => {
                    toggle(card, cardComponent)
                }
            })
            return cardComponent
        })

        return cardComponentList
    }

    const render = () => {
        const main = document.querySelector('main')
        const cardList = renderCardComponentList(inputUser)

        cardList.forEach(cardComponent => {
            main.appendChild(cardComponent)
        })

    }

    render()
}

(function App() {
    MainComponent()
})()
