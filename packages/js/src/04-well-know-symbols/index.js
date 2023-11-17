import {input, select} from '@inquirer/prompts'

function Range (start, end) {
  this.start = start
  this.end = end

  this[Symbol.iterator] = function * () {
    let current = this.start
    const last = this.end

    while (current <= last) {
      yield current++
    }
  }

  return this
}

export function runRange () {
  for (const num of new Range(1, 10)) {
    console.log(num)
  }
}

async function selection() {
  console.clear()
  const options = [{
    name: 'Show range',
    value: runRange
  }]
  const selection = await select({
    message: `[WellKnowSymbols]
What do you want to do?`,
    choices: options
  })

  selection()
}

export default async function main () {
  do {
    await selection()
  } while (await input({
    message: `[WellKnowSymbols]
Do you want to continue? (y/n)`,
    default: 'y'
  }) === 'y')
}