import React, { ChangeEvent, useState } from "react";
import { Typography, Button, Input, Space } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

interface PropsEventView {
  event: EventsEl;
  onDelete: (deleteEvent: EventsEl) => void;
  onEdit: (editEvent: EventsEl, newMessage: string) => void;
  onChangeDoneStatus: (editEvent: EventsEl) => void;
}

const EventView = ({
  event,
  onDelete,
  onEdit,
  onChangeDoneStatus,
}: PropsEventView) => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(event.message);

  const { Text } = Typography;

  const handleEdit = () => {
    if (isEdit && editText) {
      onEdit(event, editText);
    }
    setEdit((prevEditStatus) => !prevEditStatus);
  };

  const handleChangeEditText = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setEditText(value);

  return (
    <Space>
      <Checkbox
        checked={event.isDone}
        onChange={() => onChangeDoneStatus(event)}
      />
      {isEdit ? (
        <Input value={editText} onChange={handleChangeEditText} />
      ) : (
        <Text delete={event.isDone}>{event.message}</Text>
      )}
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={() => onDelete(event)}>Delete</Button>
    </Space>
  );
};

export default EventView;
