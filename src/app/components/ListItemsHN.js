import React from 'react'
import ItemHN from './ItemHN'
import styled from 'styled-components'

const Box = styled.div`
`

const ListItemsHN = (props) => {
    return (
        <Box>
            <ItemHN />            
        </Box>
    )
}

export default ListItemsHN