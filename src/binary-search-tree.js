const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return this;
    }
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.rootNode;
    let isExist = false;

    while (current) {
      if (data === current.data) isExist = true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return isExist;
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  remove(data) {
    this.rootNode = this.deletion(this.rootNode, data);
  }

  deletion(root, value) {
    if (root == null) return null;
    if (root.left == null && root.right == null) {
      if (root.data == value) return null;
      else return root;
    }
    let nodeValue = null;
    let temp, last;
    let arr = [];
    arr.push(root);

    while (arr.length != 0) {
      temp = arr.shift();
      if (temp.data == value) nodeValue = temp;
      if (temp.left != null) {
        last = temp;
        arr.push(temp.left);
      }
      if (temp.right != null) {
        last = temp;
        arr.push(temp.right);
      }
    }
    if (nodeValue != null) {
      nodeValue.data = temp.data;
      if (last.right == temp) last.right = null;
      else last.left = null;
    }
    return root;
  }

  min() {
    let current = this.rootNode;
    if (current === null) return null;

    while (current) {
      if (current.left !== null) {
        current = current.left;
      } else {
        return current.data;
      }
    }
  }

  max() {
    let current = this.rootNode;
    if (current === null) return null;

    while (current) {
      if (current.right !== null) {
        current = current.right;
      } else {
        return current.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
