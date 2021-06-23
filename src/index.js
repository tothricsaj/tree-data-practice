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
  insert() {
    // TODO: implement features
    return true;
  }

  insertNode() {
    // TODO: implement feature
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