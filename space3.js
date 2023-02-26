const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector('#result')

let currentShooterIndex = 602
let width = 31
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []
let results = 0

for (let i = 0; i < 627; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

 const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,10, 11, 12,13,14,15,16,17,18,19,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
    62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,
    93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,
    124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,
    155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,
    186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,
    217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,
    248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267
    
    
 ]



function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add('invader')
        }
        
    }
}

draw()

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
}



squares[currentShooterIndex].classList.add('shooter')


function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width -1) currentShooterIndex +=1
            break
    }
squares[currentShooterIndex].classList.add('shooter')

}

document.addEventListener('keydown', moveShooter)


function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
    remove()
    

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width + 1
            direction = -1
            goingRight = false
        }
    }

    if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width - 1
            direction = 1
            goingRight = true
        }
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }
    draw()

  if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    resultDisplay.innerHTML = "GAME OVER"
    clearInterval(invadersId)
  }  

  for (let i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length) {
        resultDisplay.innerHTML = "GAME OVER"
        clearInterval(invadersId)
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    resultDisplay.innerHTML = "YOU WIN"

    clearInterval(invadersId)
  }

}


invadersId = setInterval(moveInvaders, 450)


function shoot(e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')

        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.remove('invader')
            squares[currentLaserIndex].classList.add('boom')

            setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserId)

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            results++
            resultDisplay.innerHTML = results
            aliensRemoved.push(alienRemoved)
        }

    }
    switch(e.key) {
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 100)
    }
}


document.addEventListener('keyup', shoot)