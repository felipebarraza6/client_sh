import React, { useEffect, useState } from 'react'
import {Col, Card, Statistic} from 'antd'
import { getting_list } from "../../api/novus/endpoints"
const { Countdown } = Statistic

const GridNowData = () => {

    const [level_well, setLevel_well] = useState(null)
    const [level_pond, setLevel_pond] = useState(null)

    const deadline = Date.now() + 156 * 0.6 * 60 * 24 * 2 + 1000 * 30
    
    useEffect(() => {

        async function getData(){
            const request_1 = await getting_list(
                '3grecuc1v',
                '',
                '',
                '',
                true)
                .then((response)=> {
                    setLevel_well(response.data.result[0].value)
                })
            const request_2 = await getting_list(
                '3grecuc2v',
                '',
                '',
                '',
                true)
                .then((response)=> {
                    setLevel_pond(response.data.result[0].value)
                })
        }

        getData()


    }, [])

    return(
        <>
        <Col lg={8} xs={24} style={{paddingLeft:'5px', paddingRight:'5px', paddingBottom:'5px'}}>
            <Card title="Nivel de Pozo(metros)" bordered={false} hoverable>
                <Statistic value={`${level_well} `} />
            </Card>
        </Col>
        <Col lg={8} xs={24} style={{paddingLeft:'5px', paddingRight:'5px', paddingBottom:'5px'}}>
            <Card title="Nivel de Estanque(metros)" bordered={false} hoverable>
                <Statistic value={`${level_pond}`} />
            </Card>
        </Col>
        <Col lg={8} xs={24} style={{paddingLeft:'5px', paddingRight:'5px', paddingBottom:'5px'}}>
            <Card title="Tiempo para sincronización" bordered={false} hoverable>
                <Countdown value={deadline} format="HH:mm:ss:SSS" onFinish={()=>{ window.location.reload()  }} />
            </Card>
        </Col>
        </>
    )
}


export default GridNowData