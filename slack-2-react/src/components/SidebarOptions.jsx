import React from 'react';
import styled from 'styled-components';

export default function SidebarOptions({ Icon, title, addChannelOption }) {
  const addChannel = () => {};
  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* if icon is there, then render in the Icon component */}
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}

      {/* again, if there is an Icon, THEN render the h3, otherwise, render the SidebarOptionChannel */}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div``;
