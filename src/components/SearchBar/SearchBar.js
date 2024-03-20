import React, { useState } from 'react'
import { ReactComponent as IconSearch } from 'theme/icons/search.svg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;

  max-width: 250px;
  min-height:34px;

  border: 1px solid #617798;
  border-radius: 25px;

  background-color: transparent;
  color: #617798;
  opacity: 1;

  &:hover, &:focus-within {
    background-color: #EAF0F6;
    opacity: 0.45;
  }
  

  &:focus-within {
    outline: 1.5px solid #617798;
    outline-offset: 2px;
  }
`

const Input = styled.input`
  display:flex;
  border-radius:25px;
  align-items: stretch;
  min-width:215px;
  cursor: pointer;
  border: none;
  outline:none;
  color: #00234B; 
  background-color: transparent;
  &::placeholder {
    color: #617798;
  }
  
`

const StyledIcon = styled(IconSearch)`
  fill: #617798;
  height: 16px;

`


export default function SearchBar() {
  // put the logic here
  return (

    <Container>
      <StyledIcon />
      <Input type='text' placeholder='Search...' />
    </Container>
  );
}