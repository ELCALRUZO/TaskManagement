// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaCheck, FaUser, FaBriefcase, FaList, FaCar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Section>
        <SectionTitle>Private</SectionTitle>
        <ListItem><FaHome /> Home</ListItem>
        <ListItem><FaCheck /> Completed</ListItem>
        <ListItem><FaUser /> Personal</ListItem>
        <ListItem><FaBriefcase /> Work</ListItem>
        <ListItem><FaList /> Diet</ListItem>
        <ListItem><FaCar /> Road trip list</ListItem>
      </Section>
      <Section>
        <SectionTitle>Group</SectionTitle>
        <GroupItem>Mobal Project</GroupItem>
        <GroupItem>Futur Project</GroupItem>
      </Section>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  color: #888;
`;

const ListItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 16px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: #007bff;
  }
`;

const GroupItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  color: #333;
  font-size: 16px;

  &:hover {
    color: #007bff;
  }
`;

export default Sidebar;
