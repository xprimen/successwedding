import { ImageLoader } from '../imageLoader'
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { base_url } from '../../constant'

// import TinyLoader from 'tiny-skeleton-loader-react'

export default () => {
  // const [slideshow, setslideshow] = useState([])
  // const [slideshowLoading, setslideshowLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const { slideshow } = useSelector(state => state)
  const dispatch = useDispatch()

  /* useEffect(() => {
    getSlideShow(dispatch)
    return () => {
      getSlideShow(dispatch)
    }
  }, [dispatch]) */

  function listSlide(slideshow) {
    // if (slideshow.loading) {
    //   return <TinyLoader background="#EAEAEA" height="100vh" />
    // } else {
    return slideshow.data.map((slide, i) => (
      <Carousel.Item
        key={i}
        /* className="d-flex w-100 h-100"
        style={{
          backgroundImage:
            'url(' + slide.path + slide.image.picture.data.file_name + ')',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} */
      >
        {/* <LazyLoad> */}
        <ImageLoader
          src={base_url + slide.path + slide.image.picture.data.file_name}
          style={{
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            height: '100vh',
          }}
        />
        {/* </LazyLoad> */}
      </Carousel.Item>
    ))
    // }
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    // setDirection(e.direction)
  }

  return (
    <Carousel
      id="headerCarousel"
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      indicators={false}
      className="d-flex vh-100"
      fade={true}
    >
      {listSlide(slideshow)}
    </Carousel>
  )
}
