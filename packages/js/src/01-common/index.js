import { input, select } from '@inquirer/prompts'
import { createUser, roleChecker } from './users.js'

function buildUsers() {
  const user1 = createUser('john_doe', 'password123', 'user')

  const user2 = createUser('jane_doe', 'password456', 'admin')

  return [user1, user2]
}

function showUsers() {
  const [user1, user2] = buildUsers()
  console.log('------------------')
  console.log('keys')
  console.log(Object.keys(user1))
  console.log(Object.keys(user2))
  console.log('------------------')
  console.log('user1 keys')
  for (const key in user1) {
    console.log(key, user1[key])
  }
  console.log('------------------')
  console.log('user2 keys')
  for (const key in user2) {
    console.log(key, user2[key])
  }
}

function hackUserRole() {
  const [user1] = buildUsers()
  console.log('-----------')
  console.log('user1', roleChecker(user1))
  user1.role = 'admin'
  console.log('-----------')
  console.log('user1', roleChecker(user1))
}

async function selection() {
  console.clear()
  const options = [
    {
      name: 'Show users',
      value: showUsers,
    },
    {
      name: 'Hack user role',
      value: hackUserRole,
    },
  ]
  const selection = await select({
    message: `[Commons]
What do you want to show?`,
    choices: options,
  })

  selection()
}

export default async function main() {
  do {
    await selection()
  } while (
    (await input({
      message: `[Commons]
Do you want to continue? (y/n)`,
      default: 'y',
    })) === 'y'
  )
}
