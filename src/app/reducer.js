const initialState = {
    user: null
}


export function reducer(state = initialState, action) {
    if(action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }

    return state
}
