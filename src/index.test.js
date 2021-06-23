const {
  Node,
  TreeMap,
  BinarySearchTree
} = require('./index');

describe('Basic binary tree node features', () => {

  it('init node and get the values of it', () => {
    const simpleNode = new Node(1);

    const nodeValue = simpleNode.value;
    const nodeLeft = simpleNode.left;
    const nodeRight = simpleNode.right;

    expect(nodeValue).toBe(1);
    expect(nodeLeft).toBeNull();
    expect(nodeRight).toBeNull();
  });
});

describe('TreeMap features', () => {

  it('Just basic implemetation to overwrite in extending', () => {
    const treeMap = new TreeMap();

    treeRoot = treeMap.root;
    insertResult = treeMap.insert();
    insertNodeResult = treeMap.insertNode();
    inorderResult = treeMap.inorder();

    expect(treeRoot).toBeNull();
    expect(insertResult).toBeNull();
    expect(insertNodeResult).toBeNull();
    expect(inorderResult).toBeNull();
  });
});

describe('BST features', () => {

  describe('Overwriten functions should not be null', () => {
    
    const bst = new BinarySearchTree();

    expect(bst.insert()).not.toBeNull();
    expect(bst.insertNode()).not.toBeNull();
    expect(bst.inorder()).not.toBeNull();
  });

  describe('insert', () => {
    it('if the bst is empty', () => {
      bst.insert(42);

      const actual = bst.root;

      expect(actual).toBe(42);
    });
  });
});