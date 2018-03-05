class Node {
  constructor(el) {
    this.el = el
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  // 增
  append(el) {
    let el = new Node(el)
    let current
    if (this.head) {
      current = this.head
      while (current) {
        current = current.next
      }
      current = el
    } else {
      this.head = el
    }
    this.length++
  }
  insert(position, el) {
    if (position < 0 && position > this.length) return
    let node = new Node(el)
    let current = this.head
    let previous
    let i = 0
    if (position === 0) {
      this.head = node
      this.tail = node
    } else {
      while (i++ < position) {
        previous = current
        current = current.next
      }
      previous.next = node
      node.prev = previous
      node.next = current
      current.prev = node
    }
    this.length++
  }
  //删
  removeAt(position) {
    if (position < 0 && position > this.length) return
    let current = this.head
    let previous
    let i = 0
    if (position === 0) {
      this.head = current.next
    } else {
      while (i++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
  }
  remove(el){
    let index = this.indexOf(el)
    this.removeAt(index)
  }
  //查
  indexOf(el){
    let current = this.head
    let index = 0
    while(index < this.length){
      if(Object.is(current,el)){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  toString() {
    let str = ''
    let index = 0
    let current = this.head
    while(index < this.length){
      str = ',' + current.toString()
      current = current.next
    }
    return str.slice(1)
  }
  size(){
    return this.length
  }
  isEmpty(){
    return this.length === 0
  }
}