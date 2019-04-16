import React from 'react'
import styled from 'styled-components'

const ItemBox = styled.div`
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 0px;
    padding:20px;    
`
const Gray = styled.span`
    color: #ccc;
`
const TitleBox = styled.span`
    color: black;
    font-size: 17px;
    margin-left: 5px; 
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const Bold = styled.span`
    font-weight:500;
`
const Description = styled.span`
    font-size: 12px;
    margin-left:16px;
    font-weight: 500;
`
const Line = styled.span`
    margin-top:-3px;
    margin-left:5px;
    margin-right:5px;
    color: #ccc;
`

const obj = {
    key: 1,
    id: 8863,
    by: "justin",
    score: 21,
    kids: [8952, 9224, 8917],
    time: 1210981217,
    title: "Justin.tv is biggest",
    url: "lwn.net",
}

const Time = ({unixTime}) => {
    return "1 hour ago"
}

const NumberOfComments = ({kids}) => {
    let length=0
    kids.forEach(a=>length=length+1)
    return length
}

const ItemHN = (props) => {
    return (
        <ItemBox>
            <Row>
                <Gray>{`${obj.key}.`}</Gray>
                <TitleBox>
                    <Bold>{`${obj.title}  `}</Bold>
                    <Gray>{`(${obj.url})`}</Gray>
                </TitleBox>
            </Row>
            <Row>
                <Description>
                    {`${obj.score} points `} 
                    <Gray>by</Gray>
                    {` ${obj.by} `} 
                    <Gray><Time unixTime={obj.time}/></Gray>
                    <Line>|</Line>
                    <NumberOfComments kids={obj.kids}/> comments
                </Description>                
            </Row>
        </ItemBox>
    )
}

export default ItemHN