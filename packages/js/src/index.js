import {select} from '@inquirer/prompts'
import mainCommon from './01-common/index.js'
import mainObjectPropertyDescriptors from './02-object-property-descriptors/index.js'
import mainSymbols from './03-symbols/index.js'
import mainWellKnowSymbols from './04-well-know-symbols/index.js'
import mainWeakMaps from './05-weakMaps/index.js'
import mainWeakSets from './06-weakSets/index.js'
import mainProxies from './07-proxies/index.js'
import mainReflect from './08-reflect/index.js'

async function selection() {
  console.clear()
  const options = [
    {
      name: 'Common',
      value: mainCommon,
    },
    {
      name: 'Object Property Descriptors',
      value: mainObjectPropertyDescriptors,
    },
    {
      name: 'Symbols',
      value: mainSymbols,
    },
    {
      name: 'Well know Symbols',
      value: mainWellKnowSymbols,
    },
    {
      name: 'WeakMaps',
      value: mainWeakMaps,
    },
    {
      name: 'WeakSets',
      value: mainWeakSets,
    },
    {
      name: 'Proxies',
      value: mainProxies,
    },
    {
      name: 'Reflect',
      value: mainReflect,
    },
    {
      name: '👋 EXIT 👋',
    },
  ]
  const selection = await select({
    message: 'What do you want to show?',
    choices: options,
  })

  if (!selection) {
    console.log('Bye 👋')
    process.exit(0)
  }

  await selection()
}

async function main() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await selection()
  }
}

main()
