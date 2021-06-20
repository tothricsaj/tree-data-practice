const { Node } = require('./index');

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
})


