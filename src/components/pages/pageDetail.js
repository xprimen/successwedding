import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import { useDispatch, useSelector } from 'react-redux'
import Zoom from 'react-reveal/Zoom'
import { getPage } from '../../config/redux/action/actionPage'
import { base_url } from '../../constant'
import { ImageLoader } from '../imageLoader'
import LoaderImages from '../imageLoader/loaderImages'
import Meta from '../meta'

export default ({ slug }) => {
  // const [{ data, loading, error }, setDataProduct] = useAxios(
  //   Constant.url.API_URL + '/page?id=' + slug
  // )
  const { page } = useSelector(state => state)
  const [pageDetail, setpageDetail] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    getPage(dispatch)
  }, [dispatch])

  const showImage = (image, path, title) => {
    if (image) {
      return (
        <LazyLoad placeholder={<LoaderImages />}>
          <ImageLoader
            src={base_url + path + 'normal/' + image.picture.data.file_name}
            // path={path}
            // style={{
            //   width: '100%',
            //   objectFit: 'cover',
            //   height: '100vh',
            // }}
            className="w-100"
          />
        </LazyLoad>
      )
    }
  }

  const showData = () => {
    // if (!page.loading) {
    return page.data.map((d, i) => {
      if (d.menu_link === slug) {
        let marginTop = d.image ? '0' : '90px'
        return (
          <section
            key={i}
            id="page"
            style={{
              marginTop: marginTop,
            }}
          >
            <Meta
              title={d.product_name}
              url={'page/' + slug}
              image={
                d.image
                  ? base_url + d.path + d.image.picture.data.file_name
                  : null
              }
              keywords={d.meta_keywords}
              desc={d.meta_description}
            />
            <Container fluid={true}>
              <Row>
                <Col xs={12} className="px-0">
                  {showImage(d.image, d.path, d.title)}
                </Col>
                <Col xs={12} className="px-0">
                  <Zoom duration={800}>
                    <div
                      id="content"
                      dangerouslySetInnerHTML={{
                        __html: d.content,
                      }}
                      className={d.menu_link}
                    />
                  </Zoom>
                </Col>
              </Row>
            </Container>
          </section>
        )
      }
    })
    // } else {
    //   return (
    //     <section
    //       id="page"
    //       className="pb-5"
    //       style={{
    //         marginTop: 90,
    //       }}
    //     >
    //       <Container fluid={true}>
    //         <Row className="py-5 justify-content-center">
    //           <Col>
    //             <TinyLoader height="3em" background="#cacaca" />
    //           </Col>
    //         </Row>
    //         <Row className="packet-content">
    //           <Col>
    //             <TinyLoader height="400px" background="#cacaca" />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>
    //   )
    // }
  }

  return showData()
}
