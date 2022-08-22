import { dealWithImages } from '../deal-with-images.js'
import { CardComponent } from './card.js'

export const MainComponent = () => {

    const renderCardComponentList = (length) => {
        const image = dealWithImages(length)
        const randomImagePaths = image.getRandomImagePaths()

        const cardComponentList = randomImagePaths.map((img, index) => {
            const cardComponent = CardComponent({
                key: index + 1,
                faceBackImg: img
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