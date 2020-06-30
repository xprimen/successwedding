import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Pulse from 'react-reveal/Pulse'
import Zoom from 'react-reveal/Zoom'

export default ({}) => {
  const { wd } = useSelector(state => state)
  const whatsappLink = phone_only => {
    if (!wd.loading) {
      let phone = wd.data.phone !== undefined ? wd.data.phone.substr(1) : null
      if (phone_only) {
        return '+62' + phone
      } else {
        return 'https://wa.me/62' + phone
      }
    } else {
      return null
    }
  }
  return (
    <section id="who" className="py-5">
      <Container fluid={true} className="px-md-5">
        <Row>
          <Col xs={12}>
            <h1 className="text-center" style={{ lineHeight: 1 }}>
              {/* <Zoom duration={600} cascade> */}
              {wd.data.company_name}
              {/* </Zoom> */}
            </h1>
            <div className="text-center pb-3">
              {/* <Zoom cascade> */}
              {wd.data.meta_desc}
              {/* </Zoom> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center">
              <Zoom duration={1000} delay={600}>
                <Pulse duration={3000} forever>
                  <a
                    className="btn btn-lg btn-primary cta-btn"
                    href={whatsappLink()}
                    target="_blank"
                  >
                    <strong>Konsultasi Sekarang!</strong>
                  </a>
                </Pulse>
              </Zoom>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
