import React from 'react'
import Tag from '../Tag'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;
`

export default ({tags}) => {
    return (
        <Container>
            {tags.map((tag, idx) => <Tag key={idx} name={tag} />)}
        </Container>
    )

}
