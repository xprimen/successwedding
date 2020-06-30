import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'

// const BlurredSmallImage = styled.div`
//   background-image: url(${props => props.src});
//   filter: ${props => (!props.loaded ? 'blur(3px)' : 'unset')};
//   width: ${props => props.width};
//   height: ${props => props.height};
//   transition: filter 1s ease;
//   background-position: 50% 50%;
//   background-origin: border-box;
//   background-size: cover;
//   flex-shrink: 0;
// `

/* const imgShadow = new Image()

const isImageCached = image => {
  imgShadow.src = image
  return imgShadow.complete
}

const THUMBS_PATH = 'thumb/small_'
const IMAGES_PATH = 'normal/'

export const LazyBlurLoad = ({ path, src, ...props }) => {
  const finalImageURI = path + IMAGES_PATH + src
  const isLoaded = isImageCached(finalImageURI)
  const [loadState, setloadState] = useState({
    src: isLoaded ? finalImageURI : path + THUMBS_PATH + src,
    loaded: isLoaded,
  })

  useEffect(() => {
    if (!isLoaded) {
      const img = new Image()
      img.onload = () => {
        setloadState({
          src: img.src,
          loaded: true,
        })
      }
      img.src = finalImageURI
    }
  }, [finalImageURI, isLoaded])

  return (
    <img
      {...props}
      src={loadState.src}
      className={loadState.loaded ? 'img-loaded' : 'img-loading'}
    />
  )
} */

export const ImageLoader = props => {
  const [loaded, setloaded] = useState(false)
  const [className, setclassName] = useState('')
  const [loadedClassName, setloadedClassName] = useState('img-loaded')
  const [loadingClassName, setloadingClassName] = useState('img-loading')
  const [failedClassName, setfailedClassName] = useState('img-failed')

  const onLoad = () => {
    setloaded(true)
  }

  /* const changeClassName = () => {
      if (loaded) {
        return props.loadedClassName ? props.loadedClassName : loadedClassName
      } else {
        return props.loadingClassName ? props.loadingClassName : loadingClassName
      }
    } */

  return (
    <img
      src={props.src}
      className={loaded ? 'img-loaded' : 'img-loading'}
      onLoad={onLoad}
      {...props}
    />
  )
}
