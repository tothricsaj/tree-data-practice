const { Node, RedBlackTree } = require('./RedBlackTree');

describe('RBT\'s node features', () => {
  it('checking the initaliazition', () => {
    const simpleRBTNode = new Node('key', 1);

    const value = simpleRBTNode.value;
    const left = simpleRBTNode.left;
    const right = simpleRBTNode.right;
    const color = simpleRBTNode.color;

    expect(value).toBe(1);
    expect(left).toBeNull();
    expect(right).toBeNull();
    expect(color).toBeTruthy();   
  });
});

describe('RBT features', () => {
  describe('Overwriten functions should not be null', () => {
    
    const rbt = new RedBlackTree();

    expect(rbt.insert()).not.toBeNull();
    expect(rbt.insertNode()).not.toBeNull();
    expect(rbt.inorder()).not.toBeNull();
  });

});