import Meta from '../components/meta'
import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CarouselLightbox, { Modal, ModalGateway } from 'react-images'
import GalleryPhoto from 'react-photo-gallery'
import { useDispatch, useSelector } from 'react-redux'
import { getGallery } from '../config/redux/action/actionGallery'
import { base_url } from '../constant'

export default props => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  const { gallery } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    getGallery(dispatch)
  }, [dispatch])

  const createGalleryPhoto = () => {
    if (!gallery.loading) {
      const newData = []
      gallery.data.map((d, i) => {
        newData.push({
          src: base_url + d.path + 'normal/' + d.image.picture.data.file_name,
          srcSet: base_url + d.path + 'thumb/' + d.image.medium.file_name,
          width: d.image.picture.data.image_width,
          height: d.image.picture.data.image_height,
          alt: d.title,
        })
      })
      return (
        <>
          <GalleryPhoto onClick={openLightbox} photos={newData} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <CarouselLightbox currentIndex={currentImage} views={newData} />
              </Modal>
            ) : null}
          </ModalGateway>
        </>
      )
    } else {
      return null
    }
  }

  return (
    <>
      <Meta title="Galeri" url="gallery" />
      <section
        id="gallery"
        style={{
          marginTop: 90,
        }}
      >
        <Container>
          <Row className="pt-5 justify-content-center">
            <Col>
              <h1>Galeri</h1>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row>
            <Col>{createGalleryPhoto()}</Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
