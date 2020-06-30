import HGallery from '../components/home/hgallery'
import HProduct from '../components/home/hproduct'
import HTestimoni from '../components/home/htestimoni'
import MapPosition from '../components/home/mapPosition'
import ServicesUs from '../components/home/servicesus'
import WhoWeAre from '../components/home/whoweare'
import WhyChooseUs from '../components/home/whycooseus'
import Slideshow from '../components/slideshow'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Pulse from 'react-reveal/Pulse'
import Zoom from 'react-reveal/Zoom'
import Meta from '../components/meta'

// const AppContext = React.createContext({})

export default () => {
  const wd = useSelector((state) => state.wd)
  const whatsappLink = (phone_only) => {
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
    <>
      <Meta />
      <Slideshow />
      <WhoWeAre />
      <WhyChooseUs />
      <ServicesUs />
      <HProduct />
      <HTestimoni />
      <HGallery />
      <section id="contact-now" className="py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">{wd.data.company_name}</h1>
            </Col>
          </Row>
        </Container>
        <Container>
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
      <MapPosition />
    </>
  )
}
