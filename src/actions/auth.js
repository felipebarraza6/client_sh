import api from '../api/smart_hydro/endpoints'
import { notification } from 'antd'


export const authenticatedProcess = async(dispatch, data) => {

    const login = api.user.login(data)
                .then((response)=> {
                    dispatch({
                        type:'LOGIN',
                        payload: response
                    })
                    notification.success({
                        message:'CREDENCIALES CORRECTAS'
                    })
                })
                .catch((response) => {
                    notification.error({
                        message:'CREDENCIALES INVALIDAS'
                    })
                })

    return login
}