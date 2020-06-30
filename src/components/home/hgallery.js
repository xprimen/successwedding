import { Link } from 'gatsby'
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import { shallowEqual, useSelector } from 'react-redux'
import { base_url } from '../../constant'
import { ImageLoader } from '../imageLoader'

export default props => {
  const gallery = useSelector(state => state.gallery)

  /* useEffect(() => {
    getgallery()
  }, [getgallery]) */

  /* const getgallery = useCallback(async () => {
    if (galleryLoading) {
      await axios.get(Constant.url.API_URL + '/gallery').then(res => {
        setgallery(res.data.data)
        setgalleryLoading(false)
      })
    }
  }) */

  const list = (gallery) => {
    return gallery.data.map((gal, i) => {
      if (i <= 7) {
        /* return (
          
            <div
              className="h-100 w-100 img-bg"
              style={{
                backgroundImage: 'url(' + gal.full_path + ')',
              }}
            ></div>
          </Link>
        ) */
        return (
          <Link
            to="/gallery"
            key={i}
            //to={'/gallery/' + gal.id}
            className="col-lg-3 col-md-4 col-6 p-0 vh-50"
          >
            <LazyLoad>
              <ImageLoader
                src={
                  base_url +
                  gal.path +
                  'thumb/medium_' +
                  gal.image.picture.data.file_name
                }
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                }}
              />
            </LazyLoad>
          </Link>
        )
      }
    })
  }

  return (
    <section id="gallery" className="p-0">
      {/* <Container>
        <Row>
          <Col>
            <h1 className="text-center">Galeri</h1>
          </Col>
        </Row>
      </Container> */}
      <Container fluid={true}>
        <Row className="min-vh-100">{list(gallery)}</Row>
      </Container>
    </section>
  )
}
