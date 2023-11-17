import {
  input,
  select
} from '@inquirer/prompts'
import {
  createUser,
  roleChecker
} from './users.js'

function buildUsers () {
  const user1 = createUser('john_doe', 'password123', 'user')

  const user2 = createUser(
    'jane_doe',
    'password456',
    'admin'
  )

  return [
    user1,
    user2
  ]
}

function showUsers () {
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

function showUsersRole () {
  const [user1, user2] = buildUsers()
  console.log('------------------')
  console.log('user1', roleChecker(user1))
  console.log('------------------')
  console.log('user2', roleChecker(user2))
}

function getUsersSymbol () {
  const [user1, user2] = buildUsers()
  console.log('------------------')
  console.log('show user1 role')
  console.log(Object.getOwnPropertySymbols(user1))
  console.log('------------------')
  console.log('show user2 role')
  console.log(Object.getOwnPropertySymbols(user2))
}

function hackUserRoleSymbol () {
  const [user1] = buildUsers()
  console.log('------------------')
  console.log('user1', roleChecker(user1))
  user1[Object.getOwnPropertySymbols(user1)[1]] = 'admin'
  console.log('------------------')
  console.log('user1', roleChecker(user1))
}

async function selection() {
  console.clear()
  const options = [{
    name: 'Show users',
    value: showUsers
  }, {
    name: 'Show users role',
    value: showUsersRole
  }, {
    name: 'Get users symbol',
    value: getUsersSymbol
  }, {
    name: 'Hack user role symbol',
    value: hackUserRoleSymbol
  }]
  const selection = await select({
    message: `[Symbols]
What do you want to do?`,
    choices: options
  })

  selection()
}

export default async function main () {
  do {
    await selection()
  } while (await input({
    message: `[Symbols]
Do you want to continue? (y/n)`,
    default: 'y'
  }) === 'y')
}