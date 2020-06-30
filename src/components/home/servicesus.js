import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import { base_url } from '../../constant'

export default ({}) => {
  return (
    <section id="services">
      <Container fluid={true}>
        <Row>
          <Col
            md={6}
            className="img-bg min-vh-100"
            style={{
              backgroundImage:
                'url(' + base_url + '/assets/img/portrait3.jpg' + ')',
              height: 'auto',
            }}
          ></Col>
          <Col md={6}>
            <div className="p-5">
              <h1>
                <Zoom cascade>Our Services</Zoom>
              </h1>
              <Slide duration={1500} bottom cascade>
                <ul className="services-list list-unstyled">
                  <li className="mt-3">
                    <span className="fa fa-couch" aria-hidden="true"></span>
                    Pelaminan &amp; Dekorasi
                  </li>
                  <li className="mt-3">
                    <span className="fa fa-tshirt" aria-hidden="true"></span>
                    Busana, Attire &amp; Make Up
                  </li>
                  <li className="mt-3">
                    <span className="fa fa-cocktail" aria-hidden="true"></span>
                    Catering &amp; Foodstall
                  </li>
                </ul>
              </Slide>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
