import React from 'react'
import { FooterBox, Button, Line } from './footerStyle'

const Footer = ({prev, more}) => {
    return (
        <FooterBox>
            <Button>Prev</Button>
            <Line>|</Line>         
            <Button>More</Button>
        </FooterBox>
    )
}

export default Footer