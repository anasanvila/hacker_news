import React from 'react'
import Item from '../Item/ItemHN'
import { Box } from './listItems'

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

const ListItemsHN = (props) => {
    return (
        <Box>
            <Item item={obj}/>
            <Item item={obj}/>
        </Box>
    )
}

export default ListItemsHN