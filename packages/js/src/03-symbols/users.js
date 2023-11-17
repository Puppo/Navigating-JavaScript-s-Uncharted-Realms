const ROLE_SYMBOL = Symbol('role')
const PASSWORD_SYMBOL = Symbol('password')

export function createUser (username, password, role) {
  return {
    id: Math.floor(Math.random() * 100),
    username,
    [PASSWORD_SYMBOL]: password,
    [ROLE_SYMBOL]: role
  }
}

export function roleChecker (user) {
  if (user[ROLE_SYMBOL] === 'admin') {
    return 'You have admin privileges!'
  }
  return 'You are a user.'
};
