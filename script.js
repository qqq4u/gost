var wrapper = document.querySelector('.wrapper svg')
var btnDraw = document.querySelector('.btn-draw')
var btnErase = document.querySelector('.btn-erase')

// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  wrapper.classList.add('active')
}

function erase() {
  wrapper.classList.remove('active')
}

btnDraw.addEventListener('click', draw, false)
btnErase.addEventListener('click', erase, false)

setTimeout(draw, 300)