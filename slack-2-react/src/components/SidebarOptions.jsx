import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

export default function SidebarOptions({ Icon, title, addChannelOption, id }) {
  //  dispatch to Redux store
  const dispatch = useDispatch();

  // adding addChannel firebase db
  const addChannel = () => {
    const channelName = prompt('Please Enter the Channel Name:');

    //   if function in case the use does not enter a channel name
    if (channelName) {
      //   if the user does add name, then we are going to add room into database
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

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
    background-color: #160f29;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
