import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Tag from '../Tag'

const Container = styled.div`
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;
`

export default function TagList ({ tags }) {
    return (
        <Container>
            {tags.map((tag, idx) => <Tag key={idx} name={tag} />)}
        </Container>
    )

}
TagList.propTypes = {
    tags: PropTypes.array.isRequired,
}
