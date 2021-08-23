import React, { FC, useState } from "react";
import { Space } from "antd";

import Todo from "./Todo";
import AddNew from "./AddNew";
import { todoList } from "./utils/constants";

const TodosList: FC = () => {
  const [todos, setTodos] = useState<TodoList[]>(todoList);

  const onDeleteTodo = (todosName: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.name !== todosName)
    );
  };

  const onAddTodo = (newTodo: TodoList) => {
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const onTodoChecked = (todosName: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.name !== todosName
          ? todo
          : { name: todo.name, isDone: !todo.isDone }
      )
    );
  };

  return (
    <Space direction="vertical" size="large">
      <AddNew onAddTodo={onAddTodo} />

      {todos.map((todo) => (
        <Todo
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onChangeChecked={onTodoChecked}
        />
      ))}
    </Space>
  );
};

export default TodosList;
