import React from 'react'
import './Product.css'
import { Container, Row, Col } from 'react-bootstrap';
export default function page() {
  return (
    <>
    <Container>
        <Row className='Main'>
            <Col md={3}>
               <div className="card" style={{width: '12rem'}}>
               <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src="/product4.png" className="card-img-top" alt="..." />
              <span className="badge" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                backgroundColor: '#FFB30E',
                color: 'white',
                fontSize: '35px',
                fontWeight: '900',
                padding: '10px 20px',
                borderRadius: '0 25px 0 15px'
                            }}>15%</span>
                            </div>
                            <p className="card-text">Greys Vage</p>
                            <p className="card-text2">6 Days Remaining</p>
                        </div>
             
            </Col>


            <Col md={3}>
            <div className="card" style={{width: '12rem'}}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src="/product3.png" className="card-img-top" alt="..." />
              <span className="badge" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                backgroundColor: '#FFB30E',
                color: 'white',
                fontSize: '35px',
                fontWeight: '900',
                padding: '10px 20px',
                borderRadius: '0 25px 0 15px'
                            }}>10%</span>
                            </div>
                        <div className="card-body">
                        <p className="card-text">Greys Vage</p>
                        <p className="card-text2">6 Days Remaining</p>
                        </div>
              </div>
            </Col>


            <Col md={3}>
            <div className="card" style={{width: '12rem'}}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src="/product2.png" className="card-img-top" alt="..." />
              <span className="badge" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                backgroundColor: '#FFB30E',
                color: 'white',
                fontSize: '35px',
                fontWeight: '900',
                padding: '10px 20px',
                borderRadius: '0 25px 0 15px'
              }}>25%</span>
            </div>

                        <div className="card-body">
                        <p className="card-text">Greys Vage</p>
                        <p className="card-text2">7 Days Remaining</p>
                        </div>
              </div>
            </Col>


            <Col md={3}>
            <div className="card" style={{width: '12rem'}}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src="/product1.png" className="card-img-top" alt="..." />
              <span className="badge" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                backgroundColor: '#FFB30E',
                color: 'white',
                fontSize: '35px',
                fontWeight: '900',
                padding: '10px 20px',
                borderRadius: '0 25px 0 15px'
                            }}>20%</span>
                            </div>
                        <div className="card-body">
                        <p className="card-text">Greys Vage</p>
                        <p className="card-text2">8 Days Remaining</p>
                        </div>
              </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}
