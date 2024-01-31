'use strict'

const button = document.querySelector('button')

const convert = () => {
    const paino = document.querySelector('#paino').value
    const pituus = document.querySelector('#pituus').value / 100
    const bmi = paino / (pituus * pituus)
    document.querySelector('output').innerHTML = bmi.toFixed(2)
}

button.addEventListener('click',convert)