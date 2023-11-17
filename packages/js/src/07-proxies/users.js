const omitKeys = ['password', 'role']
const handlers = {
  has: function (_target, name) {
    if (omitKeys.indexOf(name) !== -1) {
      return false
    }
    return name in _target
  },
  ownKeys: function (_target) {
    return Object.keys(_target).filter((key) => omitKeys.indexOf(key) === -1)
  },
  get: function (_target, name) {
    if (name === 'password') {
      return '*********'
    }
    return _target[name]
  },
  set: function (_target, name, value) {
    if (name === 'role') {
      throw new Error('Cannot change role')
    }
    _target[name] = value
    return true
  },
}

export function createUser(username, password, role) {
  const user = {
    id: Math.floor(Math.random() * 100),
    username,
    password,
    role,
  }

  return new Proxy(user, handlers)
}

export function roleChecker(user) {
  if (user.role === 'admin') {
    return 'You have admin privileges!'
  }
  return 'You are a user.'
}
