import { magenta } from 'console-log-colors'
const PASSWORD = Symbol('password')

const handlers = {
  set(target, prop, value, receiver) {
    if (prop === 'role') {
      console.log(magenta('You cannot change the role'))
      return true
    }
    return Reflect.set(target, prop, value, receiver)
  },
}

export function createUser(username, password, role) {
  const user = {}
  Reflect.defineProperty(user, 'id', {
    value: Math.floor(Math.random() * 100),
    writable: false,
    enumerable: true,
    configurable: false,
  })
  Reflect.defineProperty(user, 'username', {
    value: username,
    writable: false,
    enumerable: true,
    configurable: false,
  })
  Reflect.defineProperty(user, PASSWORD, {
    value: password,
    writable: false,
    enumerable: false,
    configurable: false,
  })
  Reflect.defineProperty(user, 'role', {
    value: role,
    writable: true,
    enumerable: false,
    configurable: false,
  })
  return new Proxy(user, handlers)
}

export function roleChecker(user) {
  if (Reflect.get(user, 'role') === 'admin') {
    return 'You have admin privileges!'
  }
  return 'You are a user.'
}
