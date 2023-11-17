const weakSet = new WeakSet()
let counter = 0

function registerOnClick(container) {
  const reset = container.querySelector('#reset')
  reset.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      buildButtons(container)
    }
  })

  const buttons = container.querySelector('#buttons')
  buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      weakSet.add(e.target)

      const currentButtons = Array.from(buttons.querySelectorAll('button'))
      const allButtonsClicked = currentButtons.every((e) => weakSet.has(e))
      if (allButtonsClicked) {
        alert('All buttons clicked!')
      }
    }
  })
}

function buildButtons(container) {
  const div = container.querySelector('#buttons')
  div.innerHTML = ''
  for (let i = 0; i < 3; i++) {
    const input = document.createElement('button')
    input.innerText = `Button ${++counter}`
    div.appendChild(input)
  }
}

function buildResetButton(container) {
  const div = container.querySelector('#reset')
  const input = document.createElement('button')
  input.innerText = `Reset`
  div.appendChild(input)
}

export function buildUi(selector) {
  const container = document.querySelector(selector)
  buildResetButton(container)
  registerOnClick(container)
  buildButtons(container)

  setInterval(() => {
    console.log('weakSet', weakSet)
  }, 3000)
}
