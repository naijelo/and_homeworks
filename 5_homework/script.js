class Node {
  constructor(item, prev) {
    this.item = item;
    this.prev = prev;
  }
}


class Stack {
  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this.last = null;
    this.size = 0;
  }
  push(item) {
    if (this.size === 10) {
      throw new Error('Max size of stack');
    }
    
    this.last = new Node(item, this.last);
    this.size += 1;
  }

  pop() {
    if(this.last === null) {
      throw new Error('Stack is empty');
    }

    let result = this.last.data;
    this.last = this.last.prev;
    this.size -= 1;

    return result;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }

    return this.last.item;
  }

  isEmpty() {
    if (this.size === 0) {
      return true;
    }

    return false;
  }

  toArray() {
    const arr = [];

    while (this.last.item) {
      arr.push(this.last.item);
      this.last.item = this.last.prev.item;
    }

    return arr;
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('It is not iterable');
    }

    let fromIterableStack = new Stack(iterable.length);

    for (let item of iterable) {
      fromIterableStack.push(item);
    }

    return fromIterableStack;
  }
}