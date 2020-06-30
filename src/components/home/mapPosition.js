import React from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'

const mapPosition = () => {
  return (
    <section id="contact">
      <Container fluid={true} className="px-0 position-relative">
        <div className="embed-responsive embed-responsive-21by9 position-relative">
          <iframe
            className="embed-responsive-item"
            src="https://maps.google.com/maps?width=100%&height=300&hl=en&coord=-2.897888, 104.773894&q=Jl.%20Pangeran%20Ayin%20Komp.%20Azhar%20Permai%20Blok%20B2%20No5+(Desa%20Coding)&ie=UTF8&t=&z=17&iwloc=A&output=embed"
            frameBorder="0"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </Container>
    </section>
  )
}

export default mapPosition
