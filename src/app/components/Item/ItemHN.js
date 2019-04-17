import React from 'react'
import Time from './time'
import { ItemBox, Gray, TitleBox, Row, Bold, Description, LineInItem, Link } from './itemStyle'

const NumberOfComments = ({kids}) => {
    let length=0
    kids.forEach(a=>length=length+1)
    return length
}

const ItemHN = ({item, itemID, userID}) => {
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
                    <Link target="_blank" href={`https://news.ycombinator.com/user?id=${userID}`}>
                        {` ${item.by} `}
                    </Link>
                    <Gray><Time time={item.time}/></Gray>
                    <LineInItem>|</LineInItem>
                    <Link target="_blank" href={`https://news.ycombinator.com/item?id=${itemID}`}>
                        <NumberOfComments kids={item.kids}/> comments
                    </Link>
                </Description>                
            </Row>
        </ItemBox>
    )
}

export default ItemHN