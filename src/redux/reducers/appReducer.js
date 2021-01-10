const initialState = {
    appStatus: "idle",
    message: '',
    formStatus: ''
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_APP_STATUS":
            return {
                ...state,
                appStatus: action.status,
                message: action.message,
                formStatus: action.formStatus
            }
        default:
            return state
    }
}

export const setAppStatus = (status, message, formStatus = 'idle') => ({
    type: "SET_APP_STATUS",
    status,
    formStatus,
    message
})
