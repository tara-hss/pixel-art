let brushBox = document.createElement('div')
let body = document.querySelector('body')
body.appendChild(brushBox)

let form = document.createElement('form')
let input = document.createElement('input')
input.classList.add('input')
let btn = document.createElement('button')
btn.textContent='Set Color'

// brushBox.appendChild(form)
form.append(input, btn, brushBox)
document.querySelector('body').appendChild(form)
brushBox.classList.add('brush-box')
// let brushBoxColor = document.querySelector('.brush-box').style.background

btn.addEventListener('click', function(event) {
    event.preventDefault()
    let firstIndex = document.querySelector('input').value[0]
    if(firstIndex === "#") {
        let colorName = document.querySelector('input').value
        brushBoxColor = colorName
        brushBox.style.background = brushBoxColor

    }

})
let board = document.createElement('section')
board.classList.add('board')
document.querySelector('body').appendChild(board)



for(i=0; i <= 2000; i++) {
    let pixel = document.createElement('div')
    board.appendChild(pixel)
    pixel.classList.add('pixel')

    pixel.addEventListener('mouseover', function(event) {
        // console.log('kk')
        let pixel = event.target
        pixel.style.background = document.querySelector('.brush-box').style.background
       
    })
}


let pixel = document.querySelector('.pixel')


axios.get('http://omdbapi.com/?s=jaw&apikey=2f6435d9').then(function(res) {
    let poster = res.data.Search[0].Poster

    
    board.style.backgroundImage = `url(${poster})`
})






