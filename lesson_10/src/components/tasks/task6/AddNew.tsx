import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';

interface PropsAddNew {
  onAddTodo: (newTodo: TodoList) => void
}

const AddNew = ({onAddTodo}: PropsAddNew): JSX.Element => {
  const [newTodo, setNewTodo] = useState<string>('');

  const onChangeNewTodo = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setNewTodo(value);

  const handleHangeAdd = () => {
    onAddTodo({ name: newTodo, isDone: false });
    setNewTodo('')
  }

  return (
    <Space>
      <Input value={newTodo} onChange={onChangeNewTodo}/>
      <Button onClick={handleHangeAdd}>Add new todo</Button>
    </Space>
  )
}

export default AddNew;
