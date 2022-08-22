import { dealWithImages } from '../deal-with-images.js'
import { Card } from '../model/card.js'
import { CardComponent } from './card.js'

export const MainComponent = () => {

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

        const cardComponentList = cardList.map((card) => {
            const cardComponent = CardComponent({
                key: card.id,
                faceBackImg: card.img
            })
            return cardComponent
        })

        return cardComponentList
    }

    const render = (inputUser) => {
        const main = document.querySelector('main')
        const cardList = renderCardComponentList(inputUser)

        cardList.forEach(cardComponent => {
            main.appendChild(cardComponent)
        })

    }

    return { render }
}