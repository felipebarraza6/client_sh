import React, { useEffect, useState } from 'react'
import {Col, Card, Statistic, Typography, Row} from 'antd'
import { getting_list } from "../../api/novus/endpoints"
const { Paragraph } = Typography

const FooterData = () => {

    const [level_well, setLevel_well] = useState(null)
    const [level_pond, setLevel_pond] = useState(null)

    const deadline = Date.now() + 1000 * 0.6 * 60 * 24 * 2 + 1000 * 30

    useEffect(() => {

        async function getData(){

            const today = new Date()
            let month = ''
            let day = ''

            if(today.getMonth() < 10){
                month = `0${today.getMonth()+1}`
            }else{
                month = `${today.getMonth()+1}`
            }

            if(today.getDay() < 10){
                day = `0${today.getDate()}`
            }else{
                day = `${today.getDate()}`
            }

            let rest_date = today.setDate(today.getDate()-30)
            let for_date = new Date(rest_date)

            let month_rest = ''
            let day_rest = ''

            if(for_date.getMonth() < 10){
                month_rest = `0${for_date.getMonth()+1}`
            }else{
                month_rest = `${for_date.getMonth()+1}`
            }

            if(for_date.getDate() < 10){
                day_rest = `0${for_date.getDate()}`
            }else{
                day_rest = `${for_date.getDate()}`
            }

            const full_date_rested = `${for_date.getFullYear()}-${month_rest}-${day_rest}`
            const full_date_today = `${today.getFullYear()}-${month}-${day}`

            const request_1 = await getting_list(
                '3grecdi1va',
                full_date_rested,
                full_date_today,
                '10000',
                false)
                .then((response)=> {
                    
                    setLevel_well(response.data.result.reduce((max, p) => p.value > max ? p.value : max, response.data.result[0]))
                    
                })
            const request_2 = await getting_list(
                '3grecuc2v',
                full_date_today,
                full_date_today,
                '10000',
                false)
                .then((response)=> {
                    console.log(response)
                    let count_es = 0
                    response.data.result.map((obj)=> {                                           
                        if(obj.value >= 2.34){
                            count_es++
                        }
                    })
                    setLevel_pond(count_es)
                })
        }

        getData()


    }, [])

    return(
        <>
        <Col lg={12} xs={24} style={{paddingLeft:'5px', paddingRight:'5px', paddingBottom:'5px', marginTop: '20px'}}>
            <Card title="Día maximo de consumo del mes" bordered={false} hoverable>
                <Row align='space-around'>
                    
                    {level_well && <>
                    <Col>
                        <Statistic value={`${level_well.value} `} />    
                    </Col>
                    <Col>
                        <Statistic value={level_well.time.slice(0,10)} />                        
                    </Col>
                    </>
                    }                                        
                </Row>                                
            </Card>
        </Col>
        <Col lg={12} xs={24} style={{paddingLeft:'5px', paddingRight:'5px', paddingBottom:'5px', marginTop: '20px'}}>
            <Card title="Cantidad de estanques llenados, últimas 24hrs" bordered={false} hoverable>
                <Statistic value={`${level_pond}`} />
            </Card>
        </Col>
        </>
    )
}


export default FooterData