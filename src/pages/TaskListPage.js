// src/components/TaskListPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import TaskList from './TaskList';
import NewTaskModal from './NewTaskModal';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([
    { name: 'Task 1', time: '10:00 AM' },
    { name: 'Task 2', time: '11:00 AM' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <PageContainer>
      <Sidebar />
      <Content>
        <Header />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <AddTaskButton onClick={() => setIsModalOpen(true)}>Add Task</AddTaskButton>
        <NewTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveTask}
        />
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const AddTaskButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default TaskListPage;
