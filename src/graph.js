import './dictionary.js'
import './queue.js'

class Graph {
  constructor() {
    this.vertices = []
    this.adjlist = new Dictionary()
    this.time = 0
  }

  addVertex(v) {
    this.vertices.push(v)
    this.adjlist.set(v, [])
  }

  addEdge(v, w) {
    this.adjlist.get(v).push(w)
    this.adjlist.get(w).push(v)
  }

  toString() {
    this.vertices.map(item => {
      let str = item.concat(' => ', this.adjlist.get(item).join(' '))
      console.log(str)
    })
  }

  bfs(v, cb) {
    const color = this._initColor(),
      queue = new Queue()
    queue.enqueue(v)
    //队列先进先出 适合做广度优先遍历
    while (!queue.isEmpty()) {
      const current = queue.dequeue()
      color[current] = 'grey'
      this.adjlist.get(current).map(point => {
        if (color[point] === 'white') {
          color[point] = 'grey'
          queue.enqueue(point)
        }
      })
      color[current] = 'black'
      cb && cb(current)
    }
  }

  BFS(v) {
    const color = this._initColor(),
      queue = new Queue(),
      d = {},
      pre = {}
    queue.enqueue(v)

    this.vertices.map(item => {
      d[item] = 0
      pre[item] = null
    })

    while (!queue.isEmpty()) {
      const current = queue.dequeue()
      color[current] = 'grey'
      this.adjlist.get(current).map(point => {
        if (color[point] === 'white') {
          d[point] = d[current] + 1
          pre[point] = current
          queue.enqueue(point)
        }
      })
      color[current] = 'black'
    }
    return {
      distance: d,
      pre,
    }
  }

  _initColor() {
    const color = {}
    this.vertices.map(item => color[item] = 'white')
    return color
  }

  dfs(cb) {
    const color = this._initColor()
    this.vertices.map(item => {
      if (color[item] === 'white') {
        this.dfsVisit(item, color, cb)
      }
    })
  }

  dfsVisit(item, color, cb) {
    color[item] = 'grey'
    cb && cb(item)
    this.adjlist.get(item).map(point => {
      if (color[point] === 'white') {
        this.dfsVisit(point, color, cb)
      }
    })
    color[item] = 'black'
  }

  DFS(cb) {
    const color = this._initColor(),
      discoverTime = {},
      finishedTime = {},
      pred = {};
    this.vertices.map(item => {
      discoverTime[item] = 0
      finishedTime[item] = 0
      pred[item] = null
    })
    this.vertices.map(item => {
      if (color[item] === 'white') {
        this.DFSVisit(item, color, cb, discoverTime, finishedTime, pred)
      }
    })
    
    return {
      discoverTime,
      finishedTime,
      pred,
    }
  }

  DFSVisit(item, color, cb, discoverTime, finishedTime, pred) {
    color[item] = 'grey'
    cb && cb(item)
    discoverTime[item] = this.time++
    this.adjlist.get(item).map(point => {
      if (color[point] === 'white') {
        this.DFSVisit(point, color, cb, discoverTime, finishedTime, pred)
      }
      pred[point] = item
    })
    finishedTime[item] = this.time++
    color[item] = 'black'
  }
}