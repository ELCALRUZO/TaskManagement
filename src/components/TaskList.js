// src/components/TaskList.js
import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, setTasks }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <TaskListContainer {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.name} draggableId={task.name} index={index}>
                {(provided) => (
                  <TaskItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskName>{task.name}</TaskName>
                    <TaskTime>{task.time}</TaskTime>
                  </TaskItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </TaskListContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const TaskListContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const TaskName = styled.div`
  font-size: 18px;
  color: #333;
`;

const TaskTime = styled.div`
  font-size: 16px;
  color: #888;
`;

export default TaskList;
