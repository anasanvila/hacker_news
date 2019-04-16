import React from 'react'
import Item from '../Item/ItemHN'

const ListItemsHN = ({itemsArr}) => {
    //console.log("itemsArr",itemsArr)
    let itemsList = itemsArr.map((obj, index)=><Item item={obj} key={index}/>)
    return itemsList
}

export default ListItemsHN