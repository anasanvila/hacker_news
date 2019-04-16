import styled from 'styled-components'
import { FaSyncAlt } from 'react-icons/fa'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:#f58c23;
  padding-left:30px;
  padding-right:30px;
`
export const Refresh = styled(FaSyncAlt)`
  width:25px;
  height:25px;
  margin-top:20px;
  &:hover {
    color:#cccccc;
  }
`