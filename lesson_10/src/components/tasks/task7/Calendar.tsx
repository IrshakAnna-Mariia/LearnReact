import React from "react";
import { Calendar, Space, Typography } from "antd";

interface PropsTaskCalendar {
  events: EventsEl[];
  setCurrDate: (currDate: string) => void;
}

const TaskCalendar = ({
  events,
  setCurrDate,
}: PropsTaskCalendar): JSX.Element => {
  const { Text } = Typography;

  const onSelectChange = (value: any) =>
    setCurrDate(value.format("YYYY-DD-MM"));

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
    <>
      <Calendar 
        onSelect={onSelectChange} 
        dateCellRender={dateCellRender} 
      />
    </>
  );
};

export default TaskCalendar;
