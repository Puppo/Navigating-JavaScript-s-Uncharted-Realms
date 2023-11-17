export function createUser (username, password, role) {
  return {
    id: Math.floor(Math.random() * 100),
    username,
    password,
    role
  }
}

export function roleChecker (user) {
  if (user.role === 'admin') {
    return 'You have admin privileges!'
  }
  return 'You are a user.'
};
