import React from 'react'
import { Title, Header, Refresh } from './headerStyle'

const HeaderHN = ({refresh}) => {
    return (
        <Header>
            <Title>Hacker News</Title>            
            <Refresh onClick={refresh} />
        </Header>
    )
}

export default HeaderHN