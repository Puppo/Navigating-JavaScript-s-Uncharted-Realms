const admins = new WeakSet()
const users = new WeakSet()
const roles = {
  admin: admins,
  user: users
}

export function createUser (username, password, role) {
  const user = {
    id: Math.floor(Math.random() * 100),
    username,
    password
  }
  roles[role]?.add(user)
  return user
}

export function roleChecker (user) {
  if (admins.has(user)) {
    return 'You have admin privileges!'
  }
  return 'You are a user.'
};
