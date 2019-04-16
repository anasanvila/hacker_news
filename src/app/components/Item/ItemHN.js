import React from 'react'
import Time from './time'
import { ItemBox, Gray, TitleBox, Row, Bold, Description, LineInItem } from './itemStyle'

const NumberOfComments = ({kids}) => {
    let length=0
    kids.forEach(a=>length=length+1)
    return length
}

const ItemHN = ({item}) => {
    return (
        <ItemBox>
            <Row>
                <Gray>{`${item.key}.`}</Gray>
                <TitleBox>
                    <Bold>{`${item.title}  `}</Bold>
                    <Gray>{`(${item.url})`}</Gray>
                </TitleBox>
            </Row>
            <Row>
                <Description>
                    {`${item.score} points `} 
                    <Gray>by</Gray>
                    {` ${item.by} `} 
                    <Gray><Time time={item.time}/></Gray>
                    <LineInItem>|</LineInItem>
                    <NumberOfComments kids={item.kids}/> comments
                </Description>                
            </Row>
        </ItemBox>
    )
}

export default ItemHN