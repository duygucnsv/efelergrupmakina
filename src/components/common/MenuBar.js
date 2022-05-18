import React from 'react'
import { Container,Image,Nav, Navbar } from 'react-bootstrap'
import logo from "../../assets/img/efeler.png";
import {RiHome4Line,RiInformationLine,RiHeadphoneLine} from "react-icons/ri";
import {MdOutlineCorporateFare} from "react-icons/md"
import {VscReferences} from "react-icons/vsc"
import {AiOutlineProject} from "react-icons/ai"
import {GrGallery} from "react-icons/gr"
const MenuBar = () => {
  return (

    <Navbar expand="sm" className="menubar">
  <Container>
    <Navbar.Brand href="#home">
        <Image src={logo} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ms-auto "> 
        <Nav.Link href="#home"><RiHome4Line/> ANASAYFA</Nav.Link>
        <Nav.Link href="#link1"><MdOutlineCorporateFare/> KURUMSAL </Nav.Link>
        <Nav.Link href="#link2"><RiInformationLine/> HİZMETLERİMİZ</Nav.Link>
        <Nav.Link href="#link3"><VscReferences/> REFERANSLAR</Nav.Link>
        <Nav.Link href="#link4"><AiOutlineProject/> PROJELER</Nav.Link>
        <Nav.Link href="#link5"><GrGallery/> GALERİ</Nav.Link>
        <Nav.Link href="#link6"><RiHeadphoneLine/> İLETİŞİM</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MenuBar