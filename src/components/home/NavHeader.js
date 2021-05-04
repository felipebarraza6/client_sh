import React, {useContext} from 'react'
import { Layout, Menu, Button } from 'antd'
import {AuthContext} from "../../App"
import {LogoutOutlined} from '@ant-design/icons'

const { Header } = Layout

const NavHeader = ({isMobile}) => {

    const {state, dispatch} = useContext(AuthContext)

    return(
            <Menu theme={'dark'} mode={'horizontal'} style={{float:'right'}}>
                {!isMobile &&
                <Menu.Item style={{backgroundColor:'#001529'}}>
                    {state.user.email}
                </Menu.Item>
                }
                 <Menu.Item style={{backgroundColor:'#001529'}}>
                     <Button type={'link'} style={{color:'white'}} icon={<LogoutOutlined />}
                        onClick={()=> {
                            dispatch({
                                type:'LOGOUT'
                            })
                        }}
                     />
                </Menu.Item>
            </Menu>
    )
}


export default NavHeader