window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.interimResults = true

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recognition.addEventListener('result', e => {
  const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')

  p.textContent = transcript
  if (e.results[0].isFinal){
    p = document.createElement('p')
    words.appendChild(p)
  }
  if (transcript.includes('get the weather')){
    // do a get the weather function
    // or connect to some sort of API
    // needs to be debounced though, or ran only once
  }
})

recognition.addEventListener('end', recognition.start)

recognition.start()
