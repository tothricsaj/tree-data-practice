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

    const bst = new BinarySearchTree();

    it('if the bst is empty', () => {
      bst.insert(42);

      const actual = bst.root.value;

      expect(actual).toBe(42);
    });

    it('if the bst is NOT empty', () => {
      bst.insert(63);

      const actual = bst.root.right.value;

      expect(actual).toBe(63);
    });

    it('right side of the tree', () => {
      const rightSideBST = new BinarySearchTree();

      rightSideBST.insert(5);
      rightSideBST.insert(6);     
      rightSideBST.insert(7);
      rightSideBST.insert(8);      

      const five  = rightSideBST.root.value;
      const six   = rightSideBST.root.right.value;
      const seven = rightSideBST.root.right.right.value;
      const eight = rightSideBST.root.right.right.right.value;

      expect(five)
        .toBe(5);

      expect(six)
        .toBe(6);

      expect(seven)
        .toBe(7);

      expect(eight)
        .toBe(8);
    });

    it('left side of the tree', () => {
      const leftSideBST = new BinarySearchTree();

      leftSideBST.insert(10);
      leftSideBST.insert(9);     
      leftSideBST.insert(8);
      leftSideBST.insert(7);      

      const ten   = leftSideBST.root.value;
      const nine  = leftSideBST.root.left.value;
      const eight = leftSideBST.root.left.left.value;
      const seven = leftSideBST.root.left.left.left.value;

      expect(ten)
        .toBe(10);

      expect(nine)
        .toBe(9);

      expect(eight)
        .toBe(8);

      expect(seven)
        .toBe(7);
    });

    it('random arranged tree', () => {
      const randomBST = new BinarySearchTree();

      //       8
      //     /   \
      //    3     10
      //   / \   /  \
      //  1  4  9   12 

      randomBST.insert(8);
      randomBST.insert(10);
      randomBST.insert(3);
      randomBST.insert(4);
      randomBST.insert(1);
      randomBST.insert(12);
      randomBST.insert(9);

      const eight   =   randomBST.root.value;

      const ten     =   randomBST.root.right.value;
      const twelve  =   randomBST.root.right.right.value;
      const nine    =   randomBST.root.right.left.value;

      const three   =   randomBST.root.left.value;
      const four    =   randomBST.root.left.right.value;
      const one     =   randomBST.root.left.left.value;

      expect(eight).toBe(8);
      expect(ten).toBe(10);
      expect(twelve).toBe(12);
      expect(nine).toBe(9);
      expect(three).toBe(3);
      expect(four).toBe(4);
      expect(one).toBe(1);
    });
  });
});