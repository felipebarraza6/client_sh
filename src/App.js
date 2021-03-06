import React, { createContext, useReducer, useEffect } from 'react'
import { login_reducer } from './reducers/login_reducer'
import Home from './containers/Home'
import Login from './containers/Login'

export const AuthContext = createContext()

const initialState = {
    isAuthenticated: false,
    access_token : null,
    user: null
}

const App = () => {

    const [state, dispatch] = useReducer(login_reducer, initialState)

    useEffect(()=> {
        const access_token = JSON.parse(localStorage.getItem('access_token' || null))
        const user = JSON.parse(localStorage.getItem('user' || null))

        if(user && access_token){
            dispatch({
                type:'LOGIN',
                payload: {
                    access_token,
                    user
                }
            })
        }

    }, [])

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {state.isAuthenticated ?
                <Home />:
                <Login />
            }
        </AuthContext.Provider>
      )
    }


export default App
