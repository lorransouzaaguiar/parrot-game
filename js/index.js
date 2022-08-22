import { input } from './components/input.js'
import { MainComponent } from './components/main.js'
import { GameComponent } from './components/game.js'

(function App() {
    const numberOfCards = input()
    MainComponent().render(numberOfCards)
    GameComponent().startCardButtons()

})()