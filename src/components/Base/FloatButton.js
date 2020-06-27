import React from 'react'
import Styled from 'styled-components'

const StyledButton = Styled.div`
    position: absolute;
    width: 50px;
    height: 50px !important;
    border-radius: 50%;
    background: white;
    right: 0;
    bottom: 0;
    cursor: pointer;

    margin: 20px;

    &:before{
        content: '+';
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
    }
`

export default function FloatButton () {
    return ( <StyledButton />)
}

FloatButton.displayName = 'FloatButton'
