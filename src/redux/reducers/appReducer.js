const initialState = {
    appStatus: "idle",
    message: ''
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_APP_STATUS":
            return {
                ...state,
                appStatus: action.status,
                message: action.message
            }
        default:
            return state
    }
}

export const setAppStatus = (status, message) => ({
    type: "SET_APP_STATUS",
    status,
    message
})
