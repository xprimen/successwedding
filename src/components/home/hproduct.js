import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { shallowEqual, useSelector } from 'react-redux'
import Slide from 'react-reveal/Slide'
import { base_url } from '../../constant'

export default props => {
  const product = useSelector(state => state.product)

  const listPacket = (product) => {
    return product.data.map((packet, i) => {
      if (i <= 3) {
        const image_src = packet.images
          ? base_url +
            packet.path +
            'thumb/medium_' +
            packet.images[0].picture.data.file_name
          : base_url + '/assets/img/no-image.jpg'
        return (
          <Col md={6} key={i} className="img-bg min-vh-50 vh-50">
            <Slide bottom delay={i * 400}>
              <Card className="border-0 shadow text-white mb-3">
                <Card.Img
                  src={image_src}
                  style={{
                    objectFit: 'cover',
                    height: '50vh',
                  }}
                  className="img-fluid"
                  alt={packet.detail.id.product_name}
                />
                <Card.ImgOverlay className="layer-overlay d-flex align-items-end">
                  {/* <Card.Title>{packet.detail.id.product_name}</Card.Title> */}
                  <Card.Text as="div">
                    <strong>{packet.detail.id.product_name}</strong>
                    {/* <p>{packet.detail.id.short_description}</p> */}
                  </Card.Text>
                  <Card.Link
                    href={'/product/' + packet.id_slug}
                    className="stretched-link"
                  />
                </Card.ImgOverlay>
              </Card>
            </Slide>
          </Col>
        )
      }
    })
  }
  return (
    <section id="home-product" className="py-5">
      <Container fluid={true}>
        <Row>
          <Col>
            <h1 className="text-center">Paket</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row>{listPacket(product)}</Row>
      </Container>
    </section>
  )
}
