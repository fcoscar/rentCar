import { 
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL

} from '../constants/userConstants'

export const signup = (email,username,password,name,lastName) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const response = await fetch('/api/users/register/', {
            method: 'POST',
            body: JSON.stringify(
                {
                    first_name: name,
                    last_name: lastName,
                    username: username,
                    email: email,
                    password: password
                }
            ),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = response.json()
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch(login(username, password))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message : error.message
        })
    }
}

export const login = (username, password) =>  async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        
        const response = await fetch('/api/users/login', {
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