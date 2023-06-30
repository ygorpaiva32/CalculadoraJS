const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

input.addEventListener('keydown', function(ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
  }
  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
})

document.querySelectorAll('.charKey').forEach(charKeyBtn => {
  charKeyBtn.addEventListener("click", function(){
    const value = charKeyBtn.dataset.value 
    input.value += value
  })
})

function calculate(){

  let result= eval(input.value)
  resultInput.value = result
}

document.getElementById('clear').addEventListener("click", function(){
  input.value = ''
})

const button = document.getElementById("copyToClipboard")
button.addEventListener('click', function(){
  if(button.innerText === 'Copiar'){
    navigator.clipboard.writeText(resultInput.value)
    button.innerText = 'Copiado'
    button.classList.add('success')
  }else{
    button.classList.remove('success')
    button.innerText = 'Copiar'
  }
})

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById("themeSwitcher").addEventListener('click', function(){
  const main = document.querySelector('main')
  if(main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color' , '#f1f5f9')
    root.style.setProperty('--font-color' , '#333')
    root.style.setProperty('--primary-color' , '#00BFFF')
    main.dataset.theme = 'ligth'
  }else{
    root.style.setProperty('--bg-color' , '#212529')
    root.style.setProperty('--font-color' , '#f1f5f9')
    root.style.setProperty('--primary-color' , '#1ae263')
    main.dataset.theme = 'dark'
  }
})
