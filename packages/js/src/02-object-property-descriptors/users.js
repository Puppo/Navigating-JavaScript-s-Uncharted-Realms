export function createUser (username, password, role) {
  const user = {}
  Object.defineProperties(user, {
    id: {
      value: Math.floor(Math.random() * 100),
      writable: false,
      enumerable: true,
      configurable: false
    },
    username: {
      value: username,
      writable: false,
      enumerable: true,
      configurable: false
    },
    password: {
      value: password,
      writable: false,
      enumerable: false,
      configurable: false
    },
    role: {
      value: role,
      writable: false,
      enumerable: false,
      configurable: false
    }
  })
  return user
}

export function roleChecker (user) {
  if (user.role === 'admin') {
    return 'You have admin privileges!'
  }
  return 'You are a user.'
};
