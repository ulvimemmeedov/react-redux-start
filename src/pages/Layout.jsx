import { Container, Row, Col } from 'reactstrap';
import React from 'react'
import { Outlet } from "react-router-dom";
import Navi from '../components/Navi';

export default function Layout() {
    return (
        <Container className='dark:bg-black'>
            <Row>
                <Navi />
            </Row>
            <Row>
                <Outlet />
            </Row>
        </Container>
    )
}
