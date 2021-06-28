const TreeMap = require('../TreeMap/TreeMap');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree extends TreeMap {
  insert(data) {
    const newNode = new Node(data);
                      
    if(this.root === null)
      this.root = newNode;
    else {
      this.insertNode(this.root, newNode);
    }

    return true;
  }

  insertNode(node, newNode) {

    if(newNode === undefined) return;

    if(newNode.value < node.value) {
      if(node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode); 
    }
    else {
      if(node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right,newNode);
    }

    return true;
  }

  inorder(fn, node=this.root) {

    if(node === undefined || typeof(fn) !== 'function') return;


    if(node !== null) {
      this.inorder(fn, node.left);
      fn(node.value);
      this.inorder(fn, node.right);
    }

    return true;
  }
}

module.exports = {
  Node: Node,
  BinarySearchTree: BinarySearchTree
}