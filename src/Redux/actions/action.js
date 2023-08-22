export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteam

export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}

// Add Fav
export const FAV = (id) => {
    return {
        type: "ADD_FAV",
        payload: id
    }
}

// remove Fav

export const REMOVEFAV = (iteam) => {
    return {
        type: "RMV_FAV",
        payload: iteam
    }
}


export const loginSuccess = (accessToken) => {
    return {
        type: "LOG_SUCCESS",
        payload: accessToken
    }
}

// remove iteams
export const loginFailure = (accessToken) => {
    return {
        type: "LOG_FAIL",
        payload: accessToken
    }
}

// remove individual iteam

export const logout = (accessToken) => {
    return {
        type: "LOGOUT",
        payload: accessToken
    }
}