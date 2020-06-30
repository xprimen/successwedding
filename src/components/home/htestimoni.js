import React, { useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import { useSelector } from 'react-redux'
import Zoom from 'react-reveal/Zoom'
import { ImageLoader } from '../imageLoader'
import { base_url } from '../../constant'

export default () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  // const [testimoni, settestimoni] = useState([])
  // const [testimoniLoading, settestimoniLoading] = useState(true)
  const testimoni = useSelector(state => state.testimoni)

  /* useEffect(() => {
    getTestimoni()
  }, [gettestimoni]) */

  /* const gettestimoni = useCallback(async () => {
    if (testimoniLoading) {
      await axios.get(Constant.url.API_URL + '/testimoni').then(res => {
        settestimoni(res.data.data)
        settestimoniLoading(false)
      })
    }
  }) */

  const list = () => {
    return testimoni.data.map((dtesti, i) => {
      if (i <= 9) {
        return (
          <Carousel.Item key={i} className="mb-5">
            <div className="d-flex flex-column">
              <div className="testimoni-img text-center mb-5">
                <LazyLoad>
                  <ImageLoader
                    className="rounded-circle img-fluid shadow"
                    src={
                      base_url +
                      dtesti.path +
                      'normal/' +
                      dtesti.image.picture.data.file_name
                    }
                    alt={dtesti.name}
                    height={150}
                    width={150}
                  />
                </LazyLoad>
              </div>
              <blockquote className="blockquote bg-white p-5 mx-5 rounded">
                {dtesti.message}
                <Zoom delay={300}>
                  <footer className="blockquote-footer">{dtesti.name}</footer>
                </Zoom>
              </blockquote>
            </div>
          </Carousel.Item>
        )
      }
    })
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    // setDirection(e.direction)
  }

  return (
    <section
      id="testimoni"
      className="parallax pt-5"
      style={{
        backgroundImage: 'url(' + '/assets/img/4.jpg' + ')',
      }}
    >
      <Container>
        <Row>
          <Col sm={12}>
            <h1 className="text-center text-light mb-0 mt-4">Testimoni</h1>
            <hr className="mt-0" />
            <Carousel
              id="testimoniCarousel"
              activeIndex={index}
              direction={direction}
              onSelect={handleSelect}
              indicators={true}
              fade={false}
              slide={true}
              controls={false}
            >
              {list()}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
