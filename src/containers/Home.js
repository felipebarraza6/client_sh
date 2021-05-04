import React, {useContext, useState, useEffect} from 'react'
import { AuthContext } from "../App"
import { Layout, Menu, Affix } from 'antd'
import Footer from '../components/home/Footer'
import NavHeader from "../components/home/NavHeader"
import LogoWhite from '../assets/img/logo-white.png'
import { DashboardOutlined } from'@ant-design/icons'
import IndexDashboard from "../components/dashboard/IndexDashboard"
const { Header, Sider, Content } = Layout

const Home = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const {state, dispatch} = useContext(AuthContext)

    useEffect(() => {

        const widthScreen = window.innerWidth
        if(widthScreen > 800){
            setCollapsed(false)
            setIsMobile(false)
        }else{
            setCollapsed(true)
            setIsMobile(true)
        }

    }, []);


    return(
            <Layout style={{ minHeight:'100vh' }}>

                <Affix><Header style={{padding:'10px', paddingBottom:'80px'}}>
                    {!isMobile ? <img src={LogoWhite} width={'10%'} />: <img src={LogoWhite} width={'40%'} /> }

                    <NavHeader isMobile={isMobile} />
                </Header></Affix>
                
                <Layout >
                {!isMobile && 
                    <Sider collapsible collapsed={collapsed} onCollapse={(value)=>setCollapsed(value)} >
                        <Menu style={{marginTop:'60px'}} theme={'dark'} selectedKeys={'0'}>
                            <Menu.Item key='0' title={'Dashboard'}>
                               <DashboardOutlined style={{marginRight:'20px'}} /> {!collapsed && <>Dashboard</> }
                            </Menu.Item>
                        </Menu>
                    </Sider>}

                    <Content>
                        <IndexDashboard />
                    </Content>
                </Layout>
                <Footer />
            </Layout>
    )
}

export default Home