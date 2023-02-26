// const grid = document.querySelector(".grid")
// const resultDisplay = document.querySelector("#result")
// let currentShooterIndex = 202
// let width = 15
// let direction = 1
// let invadersId
// let goingRight = true
// let aliensRemoved = []

// for (let i = 0; i < 225; i++) {
//     const square = document.createElement("div")
//     grid.appendChild(square)
// }


// const squares = Array.from(document.querySelectorAll(".grid div"))


// const alienInvaders = [ 
//     0,1,2,3,4,5,6,7,8,9,
//     15,16,17,18,19,20,21,22,23,24,
//     30,31,32,33,34,35,36,37,38,39
// ]



// function draw() {
//     for (let i = 0; i < alienInvaders.length; i++) {
//         if (!aliensRemoved.includes(i)) {
//             squares[alienInvaders[i]].classList.add('invader')
//         }
        
//     }
// }


// draw()



// function remove() {
//     for (let i = 0; i < alienInvaders.length; i++) {
//         squares[alienInvaders[i]].classList.remove("invader")
//     }
// }






// squares[currentShooterIndex].classList.add("shooter")



// function moveShooter(e) {
//     squares[currentShooterIndex].classList.remove("shooter")
//     switch(e.key) {
//         case "ArrowLeft":
//             if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
//             break
//             case "ArrowRight":
//                 if (currentShooterIndex % width < width -1) currentShooterIndex += 1
//                 break
//     }
//     squares[currentShooterIndex].classList.add("shooter")
// }



// document.addEventListener("keydown", moveShooter)




// function moveInvaders() {
//     const leftEdge = alienInvaders[0] % width === 0
//     const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1

//     remove()

//     if (rightEdge && goingRight) {
//         for (let i = 0; i < alienInvaders.length; i++) {
//             alienInvaders[i] += width + 1
//             direction = -1
//             goingRight = false
//         }
//     }


//     if(leftEdge && !goingRight) {
//         for (let i = 0; i < alienInvaders.length; i++) {
//             alienInvaders[i] += width
//             direction = 1
//             goingRight = true
//         }
//     }



//     for ( let i = 0; i < alienInvaders.length; i++) {
//         alienInvaders[i] += direction
//     }

//     draw()

//     if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
//         resultDisplay.innerHTML = "GAME OVER"
//         clearInterval(invadersId)
//     }


//     for (let i = 0; i < alienInvaders.length; i++) {
//         if (alienInvaders[i] > (squares.length)) {
//             resultDisplay.innerHTML = "GAME OVER"
//             clearInterval(invadersId)
//         }
//     }


//     if (aliensRemoved.length === alienInvaders.length) {
//         resultDisplay.innerHTML = 'YOU WIN'
//         clearInterval(invadersId)
//     }
// }




// invadersId = setInterval(moveInvaders, 500)




// function shoot(e) {
//     let laserId
//     let currentLaserIndex = currentShooterIndex
//     function moveLaser() {
//         squares[currentLaserIndex].classList.remove('laser')
//         currentLaserIndex -= width
//         squares[currentLaserIndex].classList.add('laser')

//         if (squares[currentLaserIndex].classList.contains('invader') ) {
//             squares[currentLaserIndex].classList.remove('laser')
//             squares[currentLaserIndex].classList.remove('invader')
//             squares[currentLaserIndex].classList.add('boom')

//             setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300)
//             clearInterval(laserId)


//             const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
//             aliensRemoved.push(alienRemoved)
//         }
//     }

//     switch(e.key) {
//         case 'ArrowUp':
//             laserId = setInterval(moveLaser, 100)
//     }
// }    


// document.addEventListener('keydown', shoot)




// ---------------------------------------------------------------start------------------------------------------------------------------------------------

//  const grid = document.querySelector('.grid')
// let currentShooterIndex = 202
// let width = 15
// let direction = 1
// let invadersId 
// let goingRight = true







//  for (let i = 0; i < 225; i++) {
//     const square = document.createElement('div')
//     grid.append(square)
//  }

// const squares = Array.from(document.querySelectorAll('.grid div'))
// console.log(squares)

//  const alienInvaders = [
//     0,1,2,3,4,5,6,7,8,9,
//     15,16,17,18,19,20,21,22,23,24,
//     30,31,32,33,34,35,36,37,38,39
//  ]


// function draw() {
//     for (let i = 0; i < alienInvaders.length; i++) {
//         squares[alienInvaders[i]].classList.add('invader')
//     }
// }


// draw()

// function remove() {
//     for (let i = 0; i < alienInvaders.length; i++) {
//         squares[alienInvaders[i]].classList.remove('invader')
//     }
// }


// squares[currentShooterIndex].classList.add('shooter')

// function moveShooter(e) {
//     squares[currentShooterIndex].classList.remove('shooter')
//     switch(e.key) {
//         case 'ArrowLeft':
//             if (currentShooterIndex % width != 0) currentShooterIndex -= 1
//             break
//         case 'ArrowRight':
//             if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
//             break
//     }


// squares[currentShooterIndex].classList.add('shooter')

// }

// document.addEventListener('keydown', moveShooter)


// function moveInvaders() {
//     const leftEdge = alienInvaders[0] % width === 0
//     const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1
//     remove()


//     if (rightEdge && goingRight) {
//         for (let i = 0; i < alienInvaders.length; i++) {
//             alienInvaders[i] += width +1
//             direction = -1
//             goingRight = false
//         }
//     }



//      for (let i = 0; i < alienInvaders.length; i++) {
//         alienInvaders[i] += direction
//      }


//      draw()


// }


// invadersId = setInterval(moveInvaders, 100)









const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector('#result')
const nextBtn = document.querySelector('.nextBtn')
let currentShooterIndex = 329
let width = 20
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []
let results = 0

for (let i = 0; i < 360; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

 const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,10, 11, 12,
    20,21,22,23,24,25,26,27,28,29,30,31,32,
    40,41,42,43,44,45,46,47,48,49,50,51,52,
    60,61,62,63,64,65,66,67,68,69,70,71,72,
    80,81,82,83,84,85,86,87,88,89,90,91,92,
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
            alienInvaders[i] += width +1
            direction = -1
            goingRight = false
        }
    }

    if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width -1
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
    nextBtn.innerHTML = "NEXT"
    clearInterval(invadersId)
  }

}


invadersId = setInterval(moveInvaders, 400)


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
// 04:24







































































































































































































































































































































































































































































































































































































































































































