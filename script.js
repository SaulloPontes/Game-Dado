const rolar = document.querySelector('.btn-rolar')
const dice = document.querySelector('.dice')
const novo = document.querySelector('.btn-novo')
const segurar = document.querySelector('.btn-segurar')
dice.classList.add('hidden')
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

let dado
let actPlayer = 0
let current = 0
let score = [0, 0]
let play = true

rolar.addEventListener('click', function () {
    if (play) {

        dado = numeroAleatorio(1, 6)

        dice.src = `dados/dice-${dado}.png`
        dice.classList.remove('hidden')

        if (dado !== 1) {
            current = current + dado
            document.querySelector(`.score-${actPlayer}`).textContent = current
        } else {
            actPlayer = actPlayer === 0 ? 1 : 0
            current = 0

        }

    }

})

segurar.addEventListener('click', function () {

    score[actPlayer] = score[actPlayer] + current

    if (score[actPlayer] >= 10) {
        document.querySelector(`.highscore-${actPlayer}`).textContent = 'você ganhou'
        play = false
    } else {
        document.querySelector(`.highscore-${actPlayer}`).textContent = score[actPlayer]
        actPlayer = actPlayer === 0 ? 1 : 0
        current = 0
    }


})

novo.addEventListener('click', function () {
    document.querySelector('.highscore-0').textContent = 0
    document.querySelector('.highscore-1').textContent = 0
    document.querySelector('.score-0').textContent = 0
    document.querySelector('.score-1').textContent = 0
    current = 0
    score[0] = 0
    score[1] = 0
    play = true
})