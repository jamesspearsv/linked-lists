import List from "./models.js";

const list = List();

// build list
list.appendNode("Apple");
list.appendNode("Orange");
list.prependNode("Pear");
list.appendNode("Grape");
list.appendNode("Banana");

// test pop method
list.pop();

// test contains method
console.log('List contains "Pear" -- ' + list.contains("Pear")); // true
console.log('List contains "Banana" -- ' + list.contains("Banana")); // false

// test find method
console.log('Found value "Pear" at index ' + list.find("Pear")); // index 0
console.log('Found value "Grape" at index ' + list.find("Grape")); // index 3
console.log('Found value "Banana" at index ' + list.find("Banana")); // null

// test at method
console.log(`At index 2 -- (${list.at(2)})`);
console.log(`At index -1 -- (${list.at(-1)})`);
console.log(`At index 10 -- (${list.at(10)})`);

// print list
console.log(list.toString());
console.log(`List size -- ${list.length()} items`);
