import { Link as Reachlink, Router } from '@reach/router'
import { ImageLoader } from '../components/imageLoader/index'
import Meta from '../components/meta/index'
import ProductDetail from '../components/product/productDetail'
import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../config/redux/action/actionProduct'
import { base_url } from '../constant'

// import { createSelector } from 'reselect'
// import TinyLoader from 'tiny-skeleton-loader-react'
// const selectProduct = createSelector(state => state.product)

export default () => {
  const product = useSelector(state => state.product, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    getProduct(dispatch)
  }, [dispatch])

  return (
    <>
      <Router>
        <Prod path="/product/" product={product} />
        <ProductDetail path="/product/:idSlug" product={product} />
      </Router>
    </>
  )
}

export const Prod = ({ product }) => {
  const listProduct = () => {
    // if (product.loading) {
    //   return (
    //     <>
    //       <div className="col-md-6 img-bg min-vh-50 p-0 vh-50 packet-item">
    //         <div className="card bg-transparent border-0 p-3 h-100 text-white">
    //           <TinyLoader height="2em" background="#cacaca" />
    //           <div className="card-text mt-1">
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //           </div>
    //           <div className="d-flex justify-content-end mt-1">
    //             <TinyLoader height="1.5em" background="#cacaca" width="100px" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6 img-bg min-vh-50 p-0 vh-50 packet-item">
    //         <div className="card bg-transparent border-0 p-3 h-100 text-white">
    //           <TinyLoader height="2em" background="#cacaca" />
    //           <div className="card-text mt-1">
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //           </div>
    //           <div className="d-flex justify-content-end mt-1">
    //             <TinyLoader height="1.5em" background="#cacaca" width="100px" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6 img-bg min-vh-50 p-0 vh-50 packet-item">
    //         <div className="card bg-transparent border-0 p-3 h-100 text-white">
    //           <TinyLoader height="2em" background="#cacaca" />
    //           <div className="card-text mt-1">
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //           </div>
    //           <div className="d-flex justify-content-end mt-1">
    //             <TinyLoader height="1.5em" background="#cacaca" width="100px" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-6 img-bg min-vh-50 p-0 vh-50 packet-item">
    //         <div className="card bg-transparent border-0 p-3 h-100 text-white">
    //           <TinyLoader height="2em" background="#cacaca" />
    //           <div className="card-text mt-1">
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //             <TinyLoader height="2em" background="#cacaca" />
    //           </div>
    //           <div className="d-flex justify-content-end mt-1">
    //             <TinyLoader height="1.5em" background="#cacaca" width="100px" />
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   )
    // } else {
    return product.data.map((packet, i) => {
      // console.log(packet)
      const img_src = packet.images
        ? base_url + packet.path + 'thumb/' + packet.images[0].medium.file_name
        : base_url + '/assets/img/no-image.jpg'
      return (
        <Col md={6} key={i} className="mb-3">
          <Card className="shadow border-0">
            {/* <Card.Img
                className="img-fluid"
                variant="top"
                src={
                  packet.path +
                  'thumb/medium_' +
                  packet.images[0].picture.data.file_name
                }
                style={{ objectFit: 'cover', height: '50vh' }}
              /> */}
            <LazyLoad>
              <ImageLoader
                src={img_src}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  height: '50vh',
                  width: '100%',
                }}
                alt={packet.detail.id.product_name}
              />
            </LazyLoad>
            <Card.Body>
              <Card.Title>{packet.detail.id.product_name}</Card.Title>
              <Reachlink
                className="stretched-link"
                to={'/product/' + packet.id_slug}
                // state={{ seq: i }}
              />
            </Card.Body>
          </Card>
        </Col>
      )
    })
    // }
  }

  //to={'/portfolio/' + packet.id}

  return (
    <>
      <Meta title="Paket" url="product" />
      <section
        id="product"
        style={{
          marginTop: 90,
        }}
        className="pb-5"
      >
        <Container>
          <Row className="pt-5 justify-content-center">
            <h1>Paket</h1>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row>{listProduct()}</Row>
        </Container>
      </section>
    </>
  )
}
