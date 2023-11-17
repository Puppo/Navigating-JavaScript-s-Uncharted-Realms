const weakMap = new WeakMap()

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
      weakMap.set(e.target, true)

      const currentButtons = Array.from(buttons.querySelectorAll('button'))
      const allButtonsClicked = currentButtons.every((e) => weakMap.get(e))
      if (allButtonsClicked) {
        alert('All buttons clicked!')
      }
    }
  })
}

function buildButtons(container) {
  const div = container.querySelector('#buttons')
  div.querySelectorAll('button').forEach((e) => e.remove())
  for (let i = 0; i < 3; i++) {
    const input = document.createElement('button')
    input.innerText = `Button ${++counter}`
    div.appendChild(input)
    weakMap.set(input, false)
  }
}

function buildResetButton(container) {
  const div = container.querySelector('#reset')
  const input = document.createElement('button')
  input.innerText = `Reset`
  div.appendChild(input)
}

let counter = 0
export function buildUi(selector) {
  const container = document.querySelector(selector)
  buildResetButton(container)
  registerOnClick(container)
  buildButtons(container)

  setInterval(() => {
    console.log('weakMap', weakMap)
  }, 3000)
}
