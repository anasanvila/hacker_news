import React from 'react'
import { FooterBox, Button, Line } from './footerStyle'

const Footer = ({prev, more}) => {
    return (
        <FooterBox>
            <Button onClick={prev}>Prev</Button>
            <Line>|</Line>         
            <Button onClick={more}>More</Button>
        </FooterBox>
    )
}

export default Footer