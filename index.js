const electron = require('electron')
const ipcr = require('electron').ipcRenderer
const dialog = require('electron').remote.dialog


randomNumbers = []
customNumbers = []
numbers = []

//Generate random numbers
c = 0
generate = () => {
    window.randomNumbers = []

    while (c != 30) {
        ran = Math.floor(Math.random() * (1000))
        if (window.randomNumbers.includes(ran)) {
            continue
        }
        window.randomNumbers.push(ran)
        c++
    }

    numbers = randomNumbers.concat(customNumbers)
    c = 0
}

const btnAddNumber = document.getElementById('btnAddNumber')
const inpCustomNumber = document.getElementById('customNumber')
const btnGenerate = document.getElementById('btnGenerate')

btnAddNumber.addEventListener('click', () => {
    if (c > 29) {
        inpCustomNumber.value = ""
        dialog.showMessageBoxSync({type:"error", message:"maximum amount of numbers reached"})
    }
    else {
        if (inpCustomNumber.value != "") {
            customNumbers.push(inpCustomNumber.value)
            inpCustomNumber.value = ""
            document.getElementById('customNumbers').innerHTML = customNumbers
            c++
        }
        else {
            dialog.showMessageBoxSync({type:"error", message:"Enter a number"})
            inpCustomNumber.value = ""
        }
    }
})

btnGenerate.addEventListener('click', () => {
    generate()
    document.getElementById('randomNumbers').innerHTML = window.numbers
})

// show the Client Screen
const btnShowClient = document.getElementById('btnShowClient')

btnShowClient.addEventListener('click', () => {
    ipcr.send('numbers', window.numbers)
    console.log("btnShowClient")
})

