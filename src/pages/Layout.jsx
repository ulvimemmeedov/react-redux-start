import { Container, Row } from 'reactstrap';
import React from 'react'
import { Outlet } from "react-router-dom";
import Navi from '../components/NavBar/Navi';
import Footer from '../components/Footer/Footer';

export default function Layout() {
    return (
        <Container className='dark:bg-black'>
            <Row>
                <Navi />
            </Row>
            <div className="divide-y"></div>
            <Row>
                <Outlet />
            </Row>
            <div className="divide-y"></div>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}
