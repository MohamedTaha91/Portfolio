import React, { useState } from 'react'
import { ReactComponent as IconSearch } from 'theme/icons/search.svg';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
border-radius: 25px;
max-width: 250px;
min-height:34px;
border: 4px;
color: #617798;
border-style: double;
`

const Input = styled.input`
display:flex;
border-radius:25px;
align-items: stretch;
min-width:215px;
border: 2px;
cursor: pointer;
color:black;
`



export default function SearchBar() {
  // put the logic here
  return (
  
    <Container>
      <IconSearch/>
      <Input type='text' placeholder='Search...'/> 
    </Container>
  );
}