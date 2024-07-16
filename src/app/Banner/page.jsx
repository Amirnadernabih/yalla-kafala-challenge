import React from 'react'
import './BannerStyle.css'
import { Container, Row, Col } from 'react-bootstrap';
export default function page() {
  return (
    <>
    <Container>
        <Row className='main'>
            <Col md={6} sm={12}>
               <h1>Are you starving?</h1>
               <p>Within a few clicks, find meals that are accessible near you</p>
            </Col>
            <Col md={6} sm={12}>
            <img className='image' src="/BannerPic.png" alt="Banner Image" />
            </Col>
        </Row>
    </Container>
    </>
  )
}
