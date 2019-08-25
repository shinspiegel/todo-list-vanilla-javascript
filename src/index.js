import CreateNode from "./CreateTodoNode";
import { CreateNewTodo } from "./ManageTodo";
import { SetData, GetData } from "./LocalStorageManager";

const App = () => {
  const todoList = GetData();

  document
    .getElementById("createNewTodo")
    .addEventListener("submit", CreateNewTodo);

  const list = document.getElementById("todoList");

  todoList.map((todo, index) => {
    const newElement = CreateNode({
      text: todo.title,
      id: todo.id,
      index: index,
      completed: todo.completed
    });
    list.appendChild(newElement);
  });
};

App();
