const TreeMap = require('../TreeMap/TreeMap');

const RED = true;
const BLACK = false;

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.color = RED;
  }
}

class RedBlackTree extends TreeMap {
  isRed(node) {
    if (!node) return BLACK;
    return node.color;
  }
 
  leftRotate(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    tmp.color = node.color;
    node.color = RED;
    return tmp;
  }
 
  rightRoate(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    tmp.color = node.color;
    node.color = RED;
    return tmp;
  }
 
  flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }

  insert(key, value) {
    this.root = this.insertNode(this.root, key, value);
    this.root.color = BLACK; // Root node is always black
  }

  insertNode(node, key, value) {
    if (!node) {
      this.size++;
      return new Node(key, value);
    }
    if (key < node.key) {
      node.left = this.insertNode(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key, value);
    } else {
      node.value = value;
    }
    if (this.isRed(node.right) && !this.isRed((node.left))) {
      node = this.leftRotate(node);
    }
    if (this.isRed(node.left) && this.isRed((node.left.left))) {
      node = this.rightRoate(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }
    return node;
  }

  inorder(fn, node = this.root) {

    if(!node) {
      return;
    }

    if(node === undefined || typeof(fn) !== 'function') return;

    this.inorder(fn, node.left);
    fn(node.key);
    this.inorder(fn, node.right);
  }
}

// let rbt = new RedBlackTree();
// let ary = [5, 3, 6, 8, 4, 2];


// ary.forEach(value => rbt.insert(value));

// console.log('rbt -> ', rbt);

// rbt.inorder((value) => console.log(value));

module.exports = {
  Node,
  RedBlackTree: RedBlackTree
}