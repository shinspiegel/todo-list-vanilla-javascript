import { GetData, SetData } from "./LocalStorageManager";

function CreateNewTodoItem(todo) {
  return { id: CreateUniqueID(), title: todo, completed: false };
}

function CreateNewTodo(event) {
  const text = event.target[0].value;
  const todo = CreateNewTodoItem(text);
  const todoList = [...GetData(), todo];

  SetData(todoList);
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
  const id =
    new String(t.getFullYear()) +
    new String(t.getMonth()) +
    new String(t.getDate()) +
    new String(t.getHours()) +
    new String(t.getMinutes()) +
    new String(t.getSeconds());

  return id;
}

export { CreateNewTodo, DeleteTodo, CheckTodo };
