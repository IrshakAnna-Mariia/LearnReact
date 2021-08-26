import React from "react";
import { Calendar, Space, Typography } from "antd";

interface PropsTaskCalendar {
  events: EventsEl[];
  setCurrDate: (currDate: string) => void;
  onChangeMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskCalendar = ({
  events,
  setCurrDate,
  onChangeMode,
}: PropsTaskCalendar): JSX.Element => {
  const { Text } = Typography;

  const onSelectChange = (value: any) =>
    setCurrDate(value.format("YYYY-DD-MM"));

  const onPanelChange = (_: any, mode: any) =>
    onChangeMode(mode === "month" ? true : false);

  const dateCellRender = (value: any) => {
    const currCellData = value.format("YYYY-DD-MM");
    if (events.find(({ date }) => date === currCellData)) {
      const curEvents: EventsEl[] = events.filter(
        (event) => event.date === value.format("YYYY-DD-MM")
      );
      return (
        <Space direction="vertical">
          {curEvents.map((event) => (
            <Text>{event.message}</Text>
          ))}
        </Space>
      );
    }
  };

  return (
    <Calendar
      onSelect={onSelectChange}
      dateCellRender={dateCellRender}
      onPanelChange={onPanelChange}
    />
  );
};

export default TaskCalendar;
