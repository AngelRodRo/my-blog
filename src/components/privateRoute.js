import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

import { isLoggedIn } from '../utils/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isLoggedIn() && location.pathname !== '/tips') {
        navigate('/tips')
        return null
    }
    return <Component {...rest} />
}

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object,
}

export default PrivateRoute
