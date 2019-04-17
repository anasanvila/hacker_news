import styled from 'styled-components'

export const ItemBox = styled.div`
    background-color: white;
    margin: 0 15px 0 15px;
    padding:10px 25px 8px 25px;
    border-bottom: 1px solid #ededed; 
`
export const Gray = styled.span`
    color: #ccc;
`
export const TitleBox = styled.span`
    color: black;
    font-size: 17px;
    margin-left: 5px; 
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom:5px;
`
export const Bold = styled.span`
    font-weight:500;
`
export const Description = styled.span`
    font-size: 12px;
    margin-left:16px;
    font-weight: 500;
`
export const LineInItem = styled.span`
    margin-top:-3px;
    margin-left:5px;
    margin-right:5px;
    color: #ccc;
`
export const Link = styled.a`
    color:black;
    text-decoration:none;
    &:hover {
        color:#ccc;
    }
`