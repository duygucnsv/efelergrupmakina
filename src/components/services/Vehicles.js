import React from 'react'
import { Container,Button, Col, Row } from 'react-bootstrap'
import SectionTitle from '../common/SectionTitle'
import {FiChevronUp} from "react-icons/fi"
import {vehicleList}  from '../data/vehicleList'

const Vehicles = () => {

  return (
    <Container>
        <SectionTitle  title="PROJELERİMİZ" />
        <Row>
            <Col lg={3}>
                <ul className='vehicleList'>
                    <li><Button><FiChevronUp/></Button></li>
                    {vehicleList.map((vehicle)=>                    <li>{vehicle.model}</li>
)}
                    <li><Button></Button></li>
                </ul>
            </Col>
            <Col lg={6}></Col>
            <Col lg={3}></Col>

        </Row>
    </Container>
  )
}

export default Vehicles