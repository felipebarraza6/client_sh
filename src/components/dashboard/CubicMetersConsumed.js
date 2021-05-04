import React, {useState, useEffect} from 'react'
import { Col, Typography } from 'antd'
import { Line } from '@ant-design/charts'
import { getting_list } from "../../api/novus/endpoints"
const { Title } = Typography

const CubicMetersConsumed = () => {

    const [data, setData] = useState([])

    useEffect(()=> {
        async function getData (){

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

            const request = await getting_list(
                '3grecdi1va',
                full_date_rested,
                full_date_today,
                '10000',
                false)
                .then((response)=> {
                    response.data.result.map((obj, index)=> {
                        let format_time = obj.time.slice(0,10)


                        response.data.result[index] = {
                            ...response.data.result[index],
                            'time': format_time
                        }
                    })
                    setData(response.data.result)

                })
                .catch((response)=>{
                    console.log(response)
                })
        }



        getData()
    }, [])


    var config = {
    data: data,
    xField: 'time',
    yField: 'value',
    meta: {
            value: { alias: 'm3' },
    }
  }


    return(<Col lg={24} xs={24} style={styles.container}>
        <Title level={4} style={{ margin:'20px' }}>Metros cúbicos consumidos(m3)</Title>
        <Line {...config} />
    </Col>)
}

const styles = {
    container: {
        padding: '5px',
        paddingRight:'10px',
        marginBottom: '30px'
    }
}


export default CubicMetersConsumed