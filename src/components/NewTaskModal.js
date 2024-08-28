// src/components/NewTaskModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const NewTaskModal = ({ isOpen, onClose, onSave }) => {
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const handleSubmit = () => {
    onSave({ name: taskName, time: taskTime });
    setTaskName('');
    setTaskTime('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <ModalContent>
        <h2>New Task</h2>
        <Input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Input
          type="time"
          placeholder="Task Time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />
        <Button onClick={handleSubmit}>Save</Button>
      </ModalContent>
    </Modal>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
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

export default NewTaskModal;
