import React from 'react';
import {Button, Typography, Checkbox} from 'antd';

interface PropTodoNote {
  todo: TodoList
  onDeleteTodo: (todosName: string) => void
  onChangeChecked: (todosName: string) => void
}

const Todo = ({ todo, onDeleteTodo, onChangeChecked }: PropTodoNote) => {
  const {Text} = Typography;

  return (
    <>
      <Checkbox checked={todo.isDone} onChange={() => onChangeChecked(todo.name)}>
        <Text delete={todo.isDone}>
          {todo.name}
        </Text>
      </Checkbox>
      <Button size='small' onClick={() => onDeleteTodo(todo.name)}>Delete</Button>
    </>
  )
}

export default Todo;
