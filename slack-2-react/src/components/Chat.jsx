import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';
import Message from './Message';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import { selectRoomId } from '../features/appSlice';
import { useSelector } from 'react-redux';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

export default function Chat() {
  const chatRef = useRef(null);

  // pulling the room id from the store
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );

  // will fire a piece of code when the state changes
  // if the chat is loading, once loaded, scroll chat to bottom
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {/* only if we have room details and room messages, will we add the main chat */}
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderIcon />
            </HeaderLeft>

            <HeaderRight>
              <p>
                <InfoIcon />
                Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {/* list out the messages */}
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}

            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 4rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    font-size: 1rem;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 1rem;
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
