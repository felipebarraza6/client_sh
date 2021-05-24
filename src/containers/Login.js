import React, { useContext, useState } from 'react'

import { Row, Card, Col, Form,
        Input, Button, Space,
        Typography, Spin } from 'antd'

import { blue} from "@ant-design/colors"
import { BuildOutlined } from '@ant-design/icons'
import Logo from '../assets/img/logo-dark.png'
import { authenticatedProcess } from '../actions/auth'
import {AuthContext} from "../App"
const { Paragraph } = Typography

const Login = () => {

    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const {state, dispatch} = useContext(AuthContext)

    const onSubmit = async(values) => {
        setLoading(true)
        const request = await authenticatedProcess(dispatch, values)
            .then((response)=> {
                setLoading(false)
            }).catch((response)=> {
                setLoading(false)
            })
    }

    return(<Row style={styles.canvas}  justify={'center'} align={'top'} >
        <Col>
            <Card
                style={styles.card} hoverable
                title={<>
                    <BuildOutlined style={styles.icon} />
                    LUMAHUE</>}
                extra={'smart hydro v2.0'}
            >
                <Row>
                    <Col lg={12} xs={24} align={'start'} style={{paddingRight:'20px'}}>
                        <img alt='logoSH' src={Logo} style={styles.logo}/>
                    </Col>
                    <Col lg={12} xs={24}>
                        <Form layout={'vertical'} name='login_access' form={form} onFinish={onSubmit}>
                            <Form.Item label='Usuario' name='user' type='email' rules={[
                                {type:'email', message:'Debes ingresar un email'},
                                {required:'true', message:'Debes ingresar tu usuario'}
                            ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label='Contraseña' name='password' rules={[
                                {required:'true', message:'Debes ingresar tu contraseña'}
                            ]}>
                                <Input type={'password'} />
                            </Form.Item>
                            <Form.Item>
                                {!loading ?
                                <Space>
                                    <Button type={'primary'} htmlType='submit' >Iniciar sesión</Button>
                                    <Button type={'default'} onClick={()=> form.resetFields()} >Limpiar</Button>
                                </Space>:<Spin/>}
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Card>
            <Paragraph style={styles.p}>Desarrollador por Quality Net</Paragraph>
        </Col>
    </Row>)
}


const styles = {
    p: {
      marginTop:'30px',
      marginLeft:'30px',
      color:'white'
    },
    canvas: {
        backgroundColor: blue[9],
        height:'100vh'
    },
    logo: {
        width: '200px',
        marginTop: '20px',
        padding:'10px',
        marginLeft:'-20px'
    },
    icon: {
        fontSize:'20px',
        marginRight:'7px'
    },
    card: {
        width:'auto',
        marginRight: '10px',
        marginLeft: '10px',
        padding:'20px',
        marginTop:'20%',
        borderRadius:'30px'

    }
}

export default Login