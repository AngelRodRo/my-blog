import React, { useState } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'



const Container = Styled.div`
    display: flex;
    flex-wrap: wrap;
`
const FilterItem = Styled.div`
    padding: 5px 10px;
    margin: 5px;
    color: white;
    border-radius: 10px;

    text-align: center;
    font-size: 14px;

    background: ${props => props.selected? 'rgb(78, 160, 148)' : null };
    border: 1px solid white;
    cursor: pointer;
`

const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest

const languages = [
    'javascript',
    'java',
    'sass',
    'markdown',
    'mysql',
    'json',
    'html',
    'typescript',
    'css'
]

const defaultTags = [
    ...languages.map(lang => ({
        value: capitalize(lang),
        selected: false,
    }))
]



export default function FilterList({ onSelect = () => {} }) {

    const [tags, setTags] = useState(defaultTags)

    const selectTag = (idx) => {
        const tag = tags[idx]
        const newTags = [...tags]
        newTags.splice(idx, 1, {
            ...tag,
            selected: !tag.selected
        })
        setTags(newTags)
        onSelect(tag.value.toLowerCase())
    }

    return (
        <Container>
            {
                tags.map(({ value, selected }, idx) =>
                    <FilterItem
                        selected={selected}
                        onClick={() => selectTag(idx)}
                        key={idx}
                    >
                        {value}
                    </FilterItem>
                )
            }
        </Container>
    )
}

FilterList.propTypes = {
    onSelect: PropTypes.func,
}
