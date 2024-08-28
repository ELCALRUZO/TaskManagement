// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderContainer>
      <Greeting>Good Morning, Sullivan! 👋</Greeting>
      <DatePicker>
        <FaCalendarAlt />
        <input type="date" />
      </DatePicker>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Greeting = styled.h1`
  font-size: 24px;
  color: #333;
`;

const DatePicker = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-left: 10px;
  }

  svg {
    color: #007bff;
  }
`;

export default Header;
