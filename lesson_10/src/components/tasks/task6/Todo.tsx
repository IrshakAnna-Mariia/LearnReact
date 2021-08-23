import React from "react";
import { Button, Typography, Checkbox, Space } from "antd";

import useStyles from "./style";

interface PropTodoNote {
  todo: TodoList;
  onDeleteTodo: (todosName: string) => void;
  onChangeChecked: (todosName: string) => void;
}

const Todo = ({ todo, onDeleteTodo, onChangeChecked }: PropTodoNote) => {
  const { Text } = Typography;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Checkbox
        checked={todo.isDone}
        onChange={() => onChangeChecked(todo.name)}
      >
        <Text ellipsis delete={todo.isDone}>{todo.name}</Text>
      </Checkbox>
      <Button size="small" onClick={() => onDeleteTodo(todo.name)}>
        Delete
      </Button>
    </div>
  );
};

export default Todo;
