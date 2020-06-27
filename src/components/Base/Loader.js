import React from 'react'
import Styled from 'styled-components'

const StyledLoader = Styled.div`
  position: fixed;
  background: white;
`

export default function Loader() {
  return <StyledLoader />
}

Loader.displayName = 'Loader'

