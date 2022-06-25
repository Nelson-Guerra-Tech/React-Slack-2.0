import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        // TODO Add onClick'
        />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Header Search or Middle */}
      <HeaderSearch>
        <SearchIcon />
        <input type='text' placeholder='Search' />
      </HeaderSearch>
      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

// styled components
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;

  /* targetting the input */
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: whitesmoke;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: whitesmoke;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  /* targetting the Material Icon */
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  /* targetting the Material Icon */
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;
