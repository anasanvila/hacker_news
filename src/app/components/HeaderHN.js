import React from 'react'
import styled from 'styled-components'
import { FaSyncAlt } from 'react-icons/fa'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:#f58c23;
  padding-left:30px;
  padding-right:30px;
`
const Refresh = styled(FaSyncAlt)`
  width:25px;
  height:25px;
  margin-top:20px;
  &:hover {
    color:#cccccc;
  }
`
const HeaderHN = ({refresh}) => {
    return (
        <Header>
            <Title>Hacker News</Title>            
            <Refresh onClick={refresh} />
        </Header>
    )
}

export default HeaderHN