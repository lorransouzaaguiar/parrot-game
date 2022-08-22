export const CardComponent = ({ key, faceBackImg }) => {

    const render = () => {
        const card = document.createElement('arcticle')
        card.classList.add('card-wrapper')
        card.setAttribute('id', key)
        card.appendChild(renderFace())
        card.appendChild(renderBack())

        return card
    }

    const renderFace = () => {
        const div = document.createElement('div')
        div.classList.add('card-face', 'face-front')
        const img = renderImg()
        div.appendChild(img)
        return div
    }

    const renderBack = () => {
        const div = document.createElement('div')
        div.classList.add('card-face', 'face-back')
        const img = renderImg(faceBackImg)
        div.appendChild(img)
        return div
    }

    const renderImg = (path = './assets/front.png') => {
        const imageFront = document.createElement('img')
        imageFront.setAttribute('src', path)
        return imageFront
    }


    return render()
}