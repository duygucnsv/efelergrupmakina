import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import {

  FiPhoneCall,
 
} from "react-icons/fi";

import {MdOutlineLocalOffer} from "react-icons/md"



const TopBar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
          <Col xs={7}>
            <FiPhoneCall size={16} /> <span className="d-none d-md-inline"> BİZİ ARAYIN <p>+90 530 524 95 19</p> </span>
            
          </Col>
          
          <Col >
            <ul>
              
              <li>
                <Button className="" size="sm">
                  <MdOutlineLocalOffer/>TEKLİF ALIN
                  </Button>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
