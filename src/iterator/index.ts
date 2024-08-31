import Array from "./Array";
import Item from "./Item";

const items = [
  new Item("Item 1", 100),
  new Item("Item 2", 200),
  new Item("Item 3", 300),
  new Item("Item 4", 400),
  new Item("Item 5", 500),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();

  const domItem = document.createElement("div");
  domItem.innerHTML = `Item: ${item.name}, Cost: ${item.cost}`;
  document.body.appendChild(domItem);

  domItem.classList.add("iterator-item");
}
