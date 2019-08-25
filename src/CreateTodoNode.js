import { DeleteTodo, CheckTodo } from "./ManageTodo";

export default function CreateNewElement(definitions) {
  if (!definitions) {
    console.error("ERROR while creating new node");
    return null;
  }

  //creating nodes
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const customCheckbox = document.createElement("span");
  const paragragh = document.createElement("p");
  const button = document.createElement("button");

  //preparing nodes
  listItem.className = "todoItem";
  if (definitions.completed) {
    listItem.className += " completed";
  }

  checkbox.type = "checkbox";
  checkbox.checked = definitions.completed;
  checkbox.onchange = e => {
    CheckTodo(definitions.index);
    location.reload(true);
  };
  customCheckbox.className = "checkbox";
  paragragh.innerText = definitions.text;
  button.innerText = "×";
  button.type = "submit";
  button.onclick = e => {
    DeleteTodo(definitions.id);
    location.reload(true);
  };

  //inserting nodes
  listItem.appendChild(checkbox);
  listItem.appendChild(customCheckbox);
  listItem.appendChild(paragragh);
  listItem.appendChild(button);

  return listItem;
}
