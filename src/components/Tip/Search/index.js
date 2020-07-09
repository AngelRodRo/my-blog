import React from 'react'
import PropTypes from 'prop-types'

import Styled from 'styled-components'

import { Search } from 'react-feather'

const Input = Styled.div`
    font-size: 20px;
    color: white;

    outline: none;

    &[placeholder]:empty:before {
        content: attr(placeholder);
        color: #818181;
    }
`

const Container = Styled.div`
    display: flex;
    border-bottom: 1px solid white;
    padding: 10px;
    margin: 20px;
`

const SearchField = (props) => {
    return (
        <Container>
            <Search style={{marginRight: '20px'}}/>
            <Input
                placeholder="Busca un tip"
                contentEditable
                icon={Search}
                {...props}
            />
        </Container>
    )
}

SearchField.propTypes = {
    onChange: PropTypes.func,
}

SearchField.displayName = 'SearchField'

export default SearchField
