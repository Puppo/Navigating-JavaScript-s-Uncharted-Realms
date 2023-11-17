import {input} from '@inquirer/prompts'
export function showQuestion(selection) {
  return async () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      console.clear()
      const option = await selection()
      if (!option) break
      if (option instanceof Promise) {
        await option()
      } else {
        option()
      }
      await input({
        message: 'Press a key to continue',
      })
    }
  }
}
