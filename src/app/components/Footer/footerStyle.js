import styled from 'styled-components'

export const FooterBox = styled.div`
    background-color:white;
    height:20px;
    margin-left:15px;
    margin-right:15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left:30px;
    padding-top:15px;
    padding-bottom:15px;
`
export const Button = styled.button`
    background-color:white;
    border:none;
    &:hover {
        color: #ccc;
    }
`
export const Line = styled.div`
    margin-top:-3px;
    color: #ccc;
`