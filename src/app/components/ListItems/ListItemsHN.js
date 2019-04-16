import React from 'react'
import Item from '../Item/ItemHN'

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

const ListItemsHN = ({itemsArr}) => {
    console.log("itemsArr",itemsArr)
    let itemsList = itemsArr.map(obj=><Item item={obj}/>)
    return itemsList
}

export default ListItemsHN