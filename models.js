const Node = (value) => {
  let nextNode = null;

  return { value, nextNode };
};

const List = () => {
  let head = null;
  let tail = null;
  let size = 0;

  function appendNode(value) {
    const node = Node(value);
    //  handle existing head and tail is needed
    if (!head) head = node;
    if (tail) tail.nextNode = node;

    tail = node;
    size++;

    console.log(`Append (${node.value})`);
  }

  function prependNode(value) {
    const node = Node(value);
    // if head set new pointer to head
    if (head) node.nextNode = head;
    // set head as new node
    head = node;

    size++;
    console.log(`Prepend (${node.value})`);
  }

  function pop() {
    let previousNode = null;
    let currentNode = head;

    while (currentNode !== tail) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    tail = previousNode;
    tail.nextNode = null;
    size--;

    console.log(`Pop (${currentNode.value})`);
  }

  function toString() {
    let currentNode = head;
    let output = "";

    while (currentNode) {
      output = output.concat(`( ${currentNode.value} ) -> `);

      //   Set new current node depending on position in list
      currentNode = currentNode.nextNode !== null ? currentNode.nextNode : null;
    }

    if (currentNode === null) output = output.concat(`null`);

    return output;
  }

  function contains(value) {
    let currentNode = head;

    while (currentNode) {
      if (value.toLowerCase() === currentNode.value.toLowerCase()) return true;

      currentNode = currentNode.nextNode !== null ? currentNode.nextNode : null;
    }

    return false;
  }

  function find(value) {
    let currentNode = head;
    let index = 0;

    while (currentNode) {
      if (value.toLowerCase() === currentNode.value.toLowerCase()) return index;

      currentNode = currentNode.nextNode !== null ? currentNode.nextNode : null;
      index++;
    }

    return null;
  }

  function at(index) {
    let currentNode = head;

    if (index < 0 || index > size) return "Index out of range";

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  function length() {
    return size;
  }

  return {
    head,
    tail,
    size,
    appendNode,
    prependNode,
    pop,
    toString,
    contains,
    find,
    at,
    length,
  };
};

export default List;
