const roles = new WeakMap()
const passwords = new WeakMap()

export function createUser (username, password, role) {
  const user = {
    id: Math.floor(Math.random() * 100),
    username
  }
  passwords.set(user, password)
  roles.set(user, role)
  return user
}

export function roleChecker (user) {
  if (roles.get(user) === 'admin') {
    return 'You have admin privileges!'
  }
  return 'You are a user.'
};
