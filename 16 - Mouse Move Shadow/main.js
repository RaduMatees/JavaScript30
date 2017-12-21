const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')

function shadow(e) {
  const width = hero.offsetWidth
  const height = hero.offsetHeight
  const walk = 100; // 100px
  let x = e.offsetX
  let y = e.offsetY

  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `${xWalk}px ${yWalk}px 2px grey`
}

hero.addEventListener('mousemove', shadow)
