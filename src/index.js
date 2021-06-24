class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class TreeMap {
  constructor() {
    this.root = null;
  }

  insert() {return null}
  insertNode() {return null}
  inorder() {return null}
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

  inorder() {
    // TODO: implement feature
    return true;
  }
}

module.exports = {
	Node: Node,
  TreeMap: TreeMap,
  BinarySearchTree: BinarySearchTree
}