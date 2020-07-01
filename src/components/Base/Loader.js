import React from 'react'
import Styled from 'styled-components'

const StyledLoader = Styled.div`
    position: fixed;
    background: white;
    width: 100%;
    height: 100%;
`

export default function Loader() {
    return <StyledLoader />
}

Loader.displayName = 'Loader'

