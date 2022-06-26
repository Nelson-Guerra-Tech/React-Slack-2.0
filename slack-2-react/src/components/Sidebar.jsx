import React from 'react';
import styled from 'styled-components';

// Material Icons imports
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Andromeda HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Nelson Guerra
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOptions Icon={InsertCommentIcon} title='Threads' />
      <SidebarOptions Icon={InboxIcon} title='Mentions & reactions' />
      <SidebarOptions Icon={DraftsIcon} title='Saved items' />
      <SidebarOptions Icon={BookmarkBorderIcon} title='Channel browser' />
      <SidebarOptions Icon={PeopleAltIcon} title='People & user groups' />
      <SidebarOptions Icon={AppsIcon} title='Apps' />
      <SidebarOptions Icon={FileCopyIcon} title='File browser' />
      <SidebarOptions Icon={ExpandLessIcon} title='Show less' />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title='Channels' />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title='Add Channel' />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: whitesmoke;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: whitesmoke;
    border-radius: 100px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  > h3 {
    display: flex;
    font-size: 0.8rem;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    color: limegreen;
    font-size: 14px;
    border-radius: 100px;
    margin-right: 2px;
  }
`;
