import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import MainLayout from './index'
import { rhythm } from 'src/utils/typography'
import Loading from 'react-fullscreen-loading'

import 'react-toastify/dist/ReactToastify.css'

class TipsLayout extends React.Component {

    render() {
        const { children, isLoading } = this.props
        return (
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <MainLayout>
                    { isLoading?
                        <Loading
                            loading
                            background="#ffff"
                            loaderColor="#3498db"
                        /> :
                        null
                    }
                    <div
                        style={{
                            fontFamily: 'Verdana',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                            backgroundColor: 'var(--bg)',
                            transition: 'color 0.2s ease-out, background 0.2s ease-out',
                        }}
                    >
                        <h2 align="center" style={{ color: 'white' }}>TIPS</h2>
                        {children}
                    </div>
                </MainLayout>
            </>
        )
    }
}

TipsLayout.propTypes = {
    children: PropTypes.any,
    isLoading: PropTypes.bool,
}

const mapStateToProps = state => ({ isLoading: state.app.isLoading })

export default connect(mapStateToProps)(TipsLayout)
