import { isPar } from "../utils/par.js"

export const input = () => {
    let numberOfCards = 0

    do {
        numberOfCards = prompt('Insira a quantidade de cartas do jogo (Apenas numeros pares menores que 14)')
    } while (!isPar(numberOfCards) || numberOfCards < 4 || numberOfCards > 14)

    return numberOfCards
}