const { Node, TreeMap } = require('./index');

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


