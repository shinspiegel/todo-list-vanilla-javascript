import { GetData, SetData } from "./LocalStorageManager";

function CreateNewTodoItem(todo) {
  return { id: CreateUniqueID(), title: todo, completed: false };
}

function CreateNewTodo(event) {
  event.preventDefault();
  const text = event.target[0].value;
  const todo = CreateNewTodoItem(text);
  const todoList = [...GetData(), todo];

  SetData(todoList);
  location.reload();
}

function DeleteTodo(todoId) {
  const data = GetData();
  const newData = data.filter(item => item.id !== todoId);
  SetData(newData);
}

function CheckTodo(todoIndex) {
  const data = GetData();
  data[todoIndex].completed = !data[todoIndex].completed;
  SetData(data);
}

function CreateUniqueID() {
  const t = new Date();
  const id = `${t.getFullYear()}${t.getMonth()}${t.getDate()}${t.getHours()}${t.getMinutes()}${t.getSeconds()}`;
  return id;
}

export { CreateNewTodo, DeleteTodo, CheckTodo };
