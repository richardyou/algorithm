class Dictionary {
  constructor() {
    this.items = {}
  }

  has(key) {
    return key in this.items
  }

  set(key, val) {
    this.items[key] = val
  }

  get(key) {
    return this.items[key] || undefined
  }

  remove(key) {
    if (this.has(key)) {
      this.items[key] = undefined
      return true
    }
    return false
  }

  size() {
    return this.keys().length
  }

  keys() {
    return Object.keys(this.items)
  }

  values() {
    return Object.values(this.items)
  }

  clear() {
    this.items = {}
  }
}

export default Dictionary