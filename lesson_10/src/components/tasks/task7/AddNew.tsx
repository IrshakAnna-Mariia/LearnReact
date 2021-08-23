import React, { ChangeEvent, useState } from "react";
import { Input, Space, Button } from "antd";

interface PropsAddNew {
  date: string;
  onAddNew: (newEvent: EventsEl) => void;
}

const AddNew = ({ date, onAddNew }: PropsAddNew) => {
  const [newEvent, setNewEvent] = useState<string>("");

  const handleNewEvent = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setNewEvent(value);

  const handleAdd = () => {
    if (newEvent) onAddNew({ date, message: newEvent, isDone: false });
    setNewEvent("");
  };

  return (
    <Space>
      <Input value={newEvent} onChange={handleNewEvent} />
      <Button onClick={handleAdd}>Add</Button>
    </Space>
  );
};

export default AddNew;
