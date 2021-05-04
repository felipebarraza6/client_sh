import React, { useEffect, useState } from 'react'
import { Col, Typography } from 'antd'
import { getting_list } from "../../api/novus/endpoints"
import { Column } from '@ant-design/charts'
const {Title} = Typography

const WellLevel = () => {

    let [data, setData] = useState([])
    let config = {
        data: data,
        xField: 'time',
        yField: 'value',
        meta: {
            time: { alias: 'Hrs' },
            value: { alias: 'Mtrs', value:1 },
            },
    }


    useEffect(() => {

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

        let rest_date = today.setDate(today.getDate()-7)
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

        async function getData(){
            const request = await getting_list(
                '3grecuc1v',
                full_date_rested,
                full_date_today,
                '10000',
                false)
                .then((response)=> {
                    response.data.result.map((obj, index)=> {
                        let format_time = ''
                        if(obj.time.slice(11,13) === '04'){
                            format_time = '00-04 hrs'
                        }
                        if(obj.time.slice(11,13) === '03'){
                            format_time = '00-04 hrs'
                        }
                        if(obj.time.slice(11,13) === '02'){
                            format_time = '00-04 hrs'
                        }
                        if(obj.time.slice(11,13) === '01'){
                            format_time = '00-04 hrs'
                        }
                        if(obj.time.slice(11,13) === '00'){
                            format_time = '00-04 hrs'
                        }

                        if(obj.time.slice(11,13) === '08'){
                            format_time = '05-08 hrs'
                        }
                        if(obj.time.slice(11,13) === '07'){
                            format_time = '05-08 hrs'
                        }
                        if(obj.time.slice(11,13) === '06'){
                            format_time = '05-08 hrs'
                        }
                        if(obj.time.slice(11,13) === '05'){
                            format_time = '05-08 hrs'
                        }

                        if(obj.time.slice(11,13) === '09'){
                            format_time = '06-09 hrs'
                        }
                        if(obj.time.slice(11,13) === '08'){
                            format_time = '06-09 hrs'
                        }
                        if(obj.time.slice(11,13) === '07'){
                            format_time = '06-09 hrs'
                        }
                        if(obj.time.slice(11,13) === '06'){
                            format_time = '06-09 hrs'
                        }

                        if(obj.time.slice(11,13) === '13'){
                            format_time = '10-13 hrs'
                        }
                        if(obj.time.slice(11,13) === '12'){
                            format_time = '10-13 hrs'
                        }
                        if(obj.time.slice(11,13) === '11'){
                            format_time = '10-13 hrs'
                        }
                        if(obj.time.slice(11,13) === '10'){
                            format_time = '10-13 hrs'
                        }

                        if(obj.time.slice(11,13) === '17'){
                            format_time = '14-17 hrs'
                        }
                        if(obj.time.slice(11,13) === '16'){
                            format_time = '14-17 hrs'
                        }
                        if(obj.time.slice(11,13) === '15'){
                            format_time = '14-17 hrs'
                        }
                        if(obj.time.slice(11,13) === '14'){
                            format_time = '14-17 hrs'
                        }

                        if(obj.time.slice(11,13) === '21'){
                            format_time = '18-21 hrs'
                        }
                        if(obj.time.slice(11,13) === '20'){
                            format_time = '18-21 hrs'
                        }
                        if(obj.time.slice(11,13) === '19'){
                            format_time = '18-21 hrs'
                        }
                        if(obj.time.slice(11,13) === '18'){
                            format_time = '18-21 hrs'
                        }


                        if(obj.time.slice(11,13) === '24'){
                            format_time = '22-24 hrs'
                        }
                        if(obj.time.slice(11,13) === '23'){
                            format_time = '22-24 hrs'
                        }
                        if(obj.time.slice(11,13) === '22'){
                            format_time = '22-24 hrs'
                        }



                        response.data.result[index] = {
                            ...response.data.result[index],
                            'time': format_time
                        }
                    })

                    setData(response.data.result)
                })
        }

        getData()

    }, [])


    return(
        <Col lg={12} xs={24} style={styles.container} >
            <Title level={4} style={{ margin:'20px' }}>Nivel de pozo(mtrs)</Title>
            <Column shared={true}  {...config} />
        </Col>
    )

}

const styles = {
    container: {
        padding: '5px',
        paddingRight:'10px'
    }
}


export default WellLevel