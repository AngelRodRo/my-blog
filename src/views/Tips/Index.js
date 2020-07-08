import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

import { connect } from 'react-redux'
import { navigate } from 'gatsby'
import { toast } from 'react-toastify'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { setUser, getUser, isLoggedIn, logout } from 'src/utils/auth'

import Tip from 'src/components/Tip'
import TagFilterList from 'src/components/Tip/FilterList'
import Profile from 'src/components/Profile'

import Login from 'src/components/Login'

import userDS from 'src/datasources/user'
import tipDS from 'src/datasources/tips'

const Container = Styled.div`
    max-width: 650px;
    margin: 0 auto;
`
const InfoContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FloatButton = Styled.div`
    position: fixed;
    width: 50px;
    height: 50px !important;
    border-radius: 50%;
    background: white;
    right: 0;
    bottom: 0;
    cursor: pointer;

    margin: 20px;

    &:before{
        content: '+';
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
    }
`

const EmptyMessage = Styled.h2`
    text-align: center;
    color: white;
    margin: 40px 0;
`

const TipsList = ({tips}) => tips.map(tip =>
    <Tip
        tip={tip}
        key={tip.id}
    />
)

const Index = ({ toggleIsLoading }) => {

    const [tips, setTips] = useState([])
    const [lastTip, setLastTip] = useState(undefined)
    const [localUser, setLocalUser] = useState(getUser())
    const [filters, setFilters] = useState({
        languages: []
    })

    useEffect(() => {
        setIsLoadingIL(true)
        fetchTips({ filters }).then(() => setIsLoadingIL(false))
    }, [filters])

    const [isLogged, setIsLogged] = useState(isLoggedIn())
    const [isLoadingIL, setIsLoadingIL] = useState(false)

    useEffect(() => {
        toggleIsLoading()
        fetchTips({ offset: lastTip }).then(toggleIsLoading)
    }, [])

    const fetchTips = async ({ offset, filters }) => {
        try {
            const {tips: newTips, lastTipSnapshot} = await tipDS.list({ offset, filters })
            setLastTip(lastTipSnapshot)
            setTips([
                ...tips,
                ...newTips,
            ])
        } catch (e) {
            console.log(e)
            toast.error('Error al recuperar los tips, intentelo de nuevo mas tarde')
        }
    }

    userDS.inspect(user => {
        if (user) {
            setIsLogged(true)
        }
    })

    const addNewTips = async () => {
        setIsLoadingIL(true)
        await fetchTips({ offset: lastTip, filters })
        setIsLoadingIL(false)
    }

    const updateUser = (user) => {
        setUser(user)
        setLocalUser(user)
    }

    const doLogout = async () => {
        toggleIsLoading()
        setIsLogged(false)
        setUser({})
        await logout()
        toggleIsLoading()
    }

    const onTagSelect = async (tag) => {
        const filterTags = [...filters.languages]
        const idx = filterTags.findIndex(filterTag => filterTag === tag)

        let newFilters

        if (idx >= 0) {
            filterTags.splice(idx, 1)
        } else {
            filterTags.push(tag)
        }

        newFilters = {
            languages: filterTags
        }

        setTips([])
        setFilters(newFilters)
    }

    return (
        <Container>
            <InfoContainer>
            {
                !isLogged?
                    <Login
                        updateUser={updateUser}
                    /> :
                    <Profile
                        user={localUser}
                        logout={doLogout}
                    />
            }
            </InfoContainer>
            <TagFilterList
                onSelect={onTagSelect}
            />
            <InfiniteScroll
                dataLength={tips.length}
                next={addNewTips}
                hasMore={true}
            >
                <TipsList tips={tips} />
            </InfiniteScroll>
            <Loader
                style={{textAlign: 'center'}}
                visible={isLoadingIL}
                type="ThreeDots"
                color="#164450"
                height={50}
                width={50}
            />
            {tips.length === 0&&!isLoadingIL ?
                <EmptyMessage>
                    No hay tips disponibles !!
                </EmptyMessage> : null
            }
            {isLogged? <FloatButton onClick={() => navigate('/tips/create')} /> : null}
        </Container>
    )
}

Index.displayName = 'TipIndex'
Index.propTypes = {
    toggleIsLoading: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
    toggleIsLoading: () => dispatch({ type: 'TOGGLE_ISLOADING' }),
})

export default connect(null, mapDispatchToProps)(Index)
