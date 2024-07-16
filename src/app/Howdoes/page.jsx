import React from 'react'
import "./howdoes.css"
import { Container, Row, Col } from 'react-bootstrap';
export default function page() {
  return (
    <>
     
 <Container className='MainHowroot' >
    <h2 className='headHow'>How does it work</h2>
        <Row className='MainHow'>
            <Col md={3}>
               <div className="card" style={{width: '12rem'}}>
               <img src="/location.png" className="howphoto card-img-top" alt="..." />
               <div className="card-body">
                            <p className="card-text3">Select location</p>
                            <p className="card-text4">Choose the location where your food will be delivered.</p>
                      </div>
                        </div>
             
            </Col>


            <Col md={3}>
            <div className="card" style={{width: '12rem'}}>
            <img src="/bell.png" className=" howphoto card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text3">Choose order</p>
                        <p className="card-text4">Check over hundreds of menus to pick your favorite food</p>
                        </div>
              </div>
            </Col>


            <Col md={3}>
            <div className="card" style={{width: '12rem'}}>
            <img src="/cash.png" className="howphoto card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text3">Pay advanced</p>
                        <p className="card-text4">It's quick, safe, and simple. Select several methods of payment</p>
                        </div>
              </div>
            </Col>


            <Col md={3}>
            <div className="card" style={{width: '12rem'}}>
            <img src="/donut.png" className="howphoto card-img-top" alt="..." />
                        <div className="card-body">
                        <p className="card-text3">Enjoy meals</p>
                        <p className="card-text4">Food is made and delivered directly to your home.</p>
                        </div>
              </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}
