import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background: ${props => props.color};
    margin: 5px;
    padding: 0 5px;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
`

const HEXColors = [
    "#3fa3b6",
    "#dd390f",
    "#42646a",
    "#21cf5a",
    "#12ba13",
    "#6343bc",
    "#a60b7a",
    "#871255",
    "#175d9d",
    "#44d3f8",
]

export default ({name}) => {

    const randNum = Math.floor(Math.random() * (10))
    const color = HEXColors[randNum]

    return (
        <Container color={color}>
            {name}
        </Container>
    )
}