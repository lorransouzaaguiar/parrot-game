const inputUser = 14


const MainComponent = () => {
    const main = document.querySelector('main')

    const CardComponent = () => {
        const card = document.createElement('arcticle')
        card.classList.add('card')

        const imageFront = document.createElement('img')
        imageFront.setAttribute('src', './assets/front.png')

        card.appendChild(imageFront)

        return card
    }

    for (let i = 0; i < inputUser; i++) {
        main.appendChild(CardComponent())
    }

}

(function App() {
    MainComponent()

})()



