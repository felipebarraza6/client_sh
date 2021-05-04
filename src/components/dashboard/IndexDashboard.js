import React from 'react'
import { Row } from 'antd'
import GridNowData from "./GridNowData"
import WellLevel from "./WellLevel"
import PondLevel from "./PondLevel"
import CubicMetersConsumed from "./CubicMetersConsumed"
import FooterData from './FooterData'

const IndexDashboard = () => {

    return(<Row style={styles.container}>
        <GridNowData />
        <WellLevel />
        <PondLevel />
        <CubicMetersConsumed />
        <FooterData />
    </Row>)

}


const styles = {
    container: {
       padding :'20px'
    }
}


export default IndexDashboard