import React from 'react'
import Item from '../Item/ItemHN'

const ListItemsHN = ({itemsArr}) => {
    let itemsList = itemsArr.map((obj, index)=>
            <Item item={obj} itemID={obj.id} userID={obj.by} key={index}/>)
    return itemsList
}

export default ListItemsHN