import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Slide from 'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import { base_url } from '../../constant'

export default () => {
  const wd = useSelector(state => state.wd)
  {
  }
  return (
    <section id="why">
      <Container fluid={true}>
        <Row>
          <Col md={6}>
            <div className="p-5">
              <h1 style={{ lineHeight: 1 }}>
                <Zoom cascade>Kenapa Memilih Success Wedding?</Zoom>
              </h1>
              <Slide duration={1500} bottom>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Slide>
            </div>
          </Col>
          <Col
            md={6}
            className="img-bg min-vh-100"
            style={{
              backgroundImage:
                'url(' + base_url + '/assets/img/portrait2.jpg' + ')',
              height: 'auto',
            }}
          />
        </Row>
      </Container>
    </section>
  )
}
