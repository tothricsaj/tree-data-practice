const TreeMap = require('./TreeMap');

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