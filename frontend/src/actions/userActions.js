import { 
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT        
} from '../constants/userConstants'

export const login = (username, password) =>  async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        
        const response = await fetch('/users/login/', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
    
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }

}

export const logout = () => async (dispatch) => {
    dispatch({
        type: USER_LOGOUT
    })

    localStorage.removeItem('userInfo')
}