import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore } from 'redux'
import PropTypes from 'prop-types'
import rootReducer from '.'

const createStore = () => reduxCreateStore(rootReducer)

export default function ReduxWrapper({ element }) {
    return <Provider store={createStore()}>{element}</Provider>
}

ReduxWrapper.displayName = 'ReduxWrapper'
ReduxWrapper.propTypes = {
    element: PropTypes.object,
}
