import React, { useCallback, useEffect, useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { base_url } from '../../constant'
import { ImageLoader } from '../imageLoader'
import Meta from '../meta'

export default props => {
  const slug = props.idSlug.split('_')
  // const product = useSelector(state => state.product)
  // cosnt product = props.product
  const dispatch = useDispatch()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  useEffect(() => {
    getDetailData()
    return () => {
      getDetailData()
    }
  }, [dispatch, getDetailData])

  const listSlide = (images, path) => {
    if (images) {
      return images.map((slide, i) => (
        <Carousel.Item key={i} className="text-center">
          {/* <LazyLoad
            placeholder={<LoaderImages />}
            // height={document.body.clientHeight}
            // width={document.body.clientWidth}
            offset={0}
            once={true}
          > */}
          <ImageLoader
            src={base_url + path + 'normal/' + slide.picture.data.file_name}
            // style={{
            //   objectFit: 'cover',
            //   objectPosition: 'center center',
            //   height: '100vh',
            //   width: '100%',
            // }}
            className="vw-100"
          />
          {/* </LazyLoad> */}
          {/* <img
            className="d-block w-100"
            src={path + 'normal/' + slide.picture.data.file_name}
          /> */}
        </Carousel.Item>
      ))
    }
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  const getDetailData = useCallback(() => {
    return props.product.data
      .filter(p => p.id_slug == props.idSlug)
      .map(product => {
        return product
      })
  })

  if (getDetailData()[0]) {
    const product = getDetailData()[0]
    return (
      <>
        <section
          id="product"
          style={{
            marginTop: product.images ? 0 : 90,
          }}
          className="pb-5"
        >
          <Meta
            title={product.detail.id.product_name}
            url={'product/' + props.idSlug}
            image={
              product.images
                ? base_url +
                  product.path +
                  product.images[0].picture.data.file_name
                : null
            }
          />
          {product.images ? (
            <Container fluid={true}>
              <Row>
                <Col className="px-0 mx-auto">
                  <Carousel
                    id="productCarousel"
                    activeIndex={index}
                    direction={direction}
                    onSelect={handleSelect}
                    indicators={false}
                    fade={true}
                  >
                    {listSlide(product.images, product.path)}
                  </Carousel>
                </Col>
              </Row>
            </Container>
          ) : (
            ''
          )}
          <Container>
            <Row>
              <Col className="pt-5">
                <h1>{product.detail.id.product_name}</h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col
                dangerouslySetInnerHTML={{
                  __html: product.detail.id.description,
                }}
              ></Col>
            </Row>
          </Container>
        </section>
      </>
    )
  } else {
    return <></>
  }
}
