// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Read a book', time: '08:00 - 09:00' },
    { name: 'Wireframing new product', time: '09:00 - 11:00' },
    // Add more tasks
  ]);

  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <TaskList tasks={tasks} />
      </MainContent>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  background-color: #e5e5e5;
`;

export default App;
