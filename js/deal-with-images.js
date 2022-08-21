export const dealWithImages = (numberOfImages) => {

    const basePath = './assets/'

    const imagePaths = [
        'bobrossparrot.gif',
        'explodyparrot.gif',
        'fiestaparrot.gif',
        'metalparrot.gif',
        'revertitparrot.gif',
        'tripletsparrot.gif',
        'unicornparrot.gif'
    ]

    const numberOfDifferentImages = numberOfImages / 2

    const duplicateImagePaths = () => {
        const somePaths = imagePaths.slice(0, numberOfDifferentImages)
        const duplicatePaths = []

        somePaths.forEach(path => {
            duplicatePaths.push(basePath + path)
            duplicatePaths.push(basePath + path)
        })

        return duplicatePaths

    }

    const getRandomImagePaths = () => {
        return duplicateImagePaths().sort(() => Math.random() - 0.5)
    }

    return { getRandomImagePaths }
}
