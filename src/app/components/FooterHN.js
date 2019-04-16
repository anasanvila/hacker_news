import React from 'react'
import styled from 'styled-components'

const FooterBox = styled.div`
    background-color:white;
    height:20px;
    margin-left:15px;
    margin-right:15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-top:1px solid #ededed;
    padding-left:30px;
    padding-top:15px;
    padding-bottom:15px;
`
const Button = styled.button`
    background-color:white;
    border:none;
    &:hover {
        color: #ccc;
    }
`
const Line = styled.div`
    margin-top:-3px;
    color: #ccc;
`
const Footer = ({prev, more}) => {
    return (
        <FooterBox>
            <Button>Prev</Button>
            <Line>|</Line>         
            <Button>More</Button>
        </FooterBox>
    )
}

export default Footer