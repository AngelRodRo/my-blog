const initialState = {
    isLoading: false,
}

const TOGGLE_ISLOADING = 'TOGGLE_ISLOADING'

export const toggleIsLoading = isLoading => ({
    type: TOGGLE_ISLOADING, isLoading
})

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ISLOADING:
            return { ...state, isLoading: !state.isLoading }
        default:
            return state
    }
}
