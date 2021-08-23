import React, { useState } from "react";
import { Space } from "antd";

import Calendar from "./Calendar";
import AddNew from "./AddNew";
import EventView from "./EventView";

const Task7: React.FC = () => {
  const [events, setEvents] = useState<EventsOrg>({
    allEvents: [
      {
        date: "2021-23-08",
        message: "some message",
        isDone: true,
      },
    ],
    currEvents: [
      {
        date: "2021-23-08",
        message: "some message",
        isDone: true,
      },
    ],
    currDate: "2021-23-08",
  });

  const setCurrDate = (currDate: string) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      currEvents: prevEvents.allEvents.filter(
        (event) => event.date === currDate
      ),
      currDate,
    }));
  };
  const onAdd = (newEvent: EventsEl) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      allEvents: prevEvents.allEvents.concat(newEvent),
      currEvents: prevEvents.currEvents.concat(newEvent),
    }));
  };

  const onDelete = (deleteEvent: EventsEl) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      allEvents: prevEvents.allEvents.filter(
        ({ date, message }) =>
          date !== deleteEvent.date || message !== deleteEvent.message
      ),
      currEvents: prevEvents.currEvents.filter(
        ({ date, message }) =>
          date !== deleteEvent.date || message !== deleteEvent.message
      ),
    }));
  };

  const getNewEditedEvent = (
    arr: EventsEl[],
    editEvent: EventsEl,
    newMessege: string,
    newDoneStatus: boolean
  ) => {
    return arr.map(({ date, message, isDone }) =>
      date !== editEvent.date || message !== editEvent.message
        ? { date, message, isDone }
        : { date, message: newMessege, isDone: newDoneStatus }
    );
  };

  const onEdit = (editEvent: EventsEl, newMessage: string) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      allEvents: getNewEditedEvent(
        prevEvents.allEvents,
        editEvent,
        newMessage,
        editEvent.isDone
      ),
      currEvents: getNewEditedEvent(
        prevEvents.currEvents,
        editEvent,
        newMessage,
        editEvent.isDone
      ),
    }));
  };

  const onChangeDoneStatus = (editEvent: EventsEl) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      allEvents: getNewEditedEvent(
        prevEvents.allEvents,
        editEvent,
        editEvent.message,
        !editEvent.isDone
      ),
      currEvents: getNewEditedEvent(
        prevEvents.currEvents,
        editEvent,
        editEvent.message,
        !editEvent.isDone
      ),
    }));
  };

  return (
    <Space direction="vertical">
      <Calendar events={events.allEvents} setCurrDate={setCurrDate} />
      <AddNew date={events.currDate} onAddNew={onAdd} />
      {events.currEvents.map((event) => (
        <EventView
          event={event}
          onDelete={onDelete}
          onEdit={onEdit}
          onChangeDoneStatus={onChangeDoneStatus}
        />
      ))}
    </Space>
  );
};

export default Task7;
