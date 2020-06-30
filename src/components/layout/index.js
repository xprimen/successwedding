import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Provider } from 'react-redux'
import '../../assets/css/font-awesome.min.css'
import { getGallery } from '../../config/redux/action/actionGallery'
import '../../assets/css/gatstrap.scss'
import { getmenu } from '../../config/redux/action/actionMenu'
import { getPage } from '../../config/redux/action/actionPage'
import { getProduct } from '../../config/redux/action/actionProduct'
import { getSlideShow } from '../../config/redux/action/actionSlideshow'
import { getTestimoni } from '../../config/redux/action/actionTestimoni'
import { getWebsiteData } from '../../config/redux/action/actionWebsiteData'
import { store } from '../../config/redux/store'
import Footer from '../footer'
import Navi from '../navi'


const Layout = (props) => {
  const [menuTop, setMenuTop] = useState()
  const [menuBottom, setMenuBottom] = useState()
  const [loading, setLoading] = useState(true)
  // const ref = useRef(null)
  const [fireScroll, setFireScroll] = useState(false)
  const [websiteData, setWebsiteData] = useState()

  useEffect(() => {
    // whenScroll(true)
    // whenOnScroll()
    // getFirstData()
    // createOnLoad()
    window.addEventListener('scroll', handleScroll)

    getmenu(store.dispatch)
    getWebsiteData(store.dispatch)
    getSlideShow(store.dispatch)
    getProduct(store.dispatch)
    getPage(store.dispatch)
    getGallery(store.dispatch)
    getTestimoni(store.dispatch)

    return () => {
      // getFirstData()
      // whenScroll(false)
      /* whenOnScroll()
      whenOffScroll() */
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const handleScroll = () => {
    // console.log(ref)
    // setFireScroll(ref.current.getBoundingClientRect().top <= 0)
    if (window.pageYOffset > 300) {
      setFireScroll(true)
    } else {
      setFireScroll(false)
    }
  }

  // const getFirstData = useCallback(() => {
  //   getmenu(store.dispatch)
  //   getWebsiteData(store.dispatch)
  //   getSlideShow(store.dispatch)
  //   getProduct(store.dispatch)
  //   getPage(store.dispatch)
  //   getGallery(store.dispatch)
  // })

  // const whenScroll = useCallback(trigger => {
  //   if (typeof window !== undefined) {
  //     if (trigger) {
  //       window.addEventListener('scroll', event => {
  //         if (window.pageYOffset > 300) {
  //           setFireScroll(true)
  //         } else {
  //           setFireScroll(false)
  //         }
  //       })
  //     } else {
  //       window.removeEventListener('scroll', event => {
  //         if (window.pageYOffset > 300) {
  //           setFireScroll(false)
  //         } else {
  //           setFireScroll(true)
  //         }
  //       })
  //     }
  //   }
  // })

  /* const whenOnScroll = useCallback(() => {
    document.addEventListener('scroll', event => {
      if (window.pageYOffset > 300) {
        setFireScroll(true)
      } else {
        setFireScroll(false)
      }
    })
  })

  const whenOffScroll = useCallback(() => {
    document.removeEventListener('scroll', event => {
      if (window.pageYOffset > 300) {
        setFireScroll(false)
      } else {
        setFireScroll(true)
      }
    })
  }) */

  return (
    <Provider store={store}>
      <Navi shrink={fireScroll} />
      <div id="main">
        {props.children}
        <Footer />
      </div>
      <ButtonToTop show={fireScroll} />
    </Provider>
  )
}

export default Layout

const ButtonToTop = ({ show }) => {
  const dnone = !show ? ' d-none' : ''

  return (
    <Button
      className={'position-fixed rounded-circle' + dnone}
      style={{
        bottom: 10,
        right: 10,
        backgroundColor: '#E3BC9A',
      }}
      onClick={() => {
        window.scroll(0, 0)
      }}
    >
      <i className="fas fa-chevron-up"></i>
    </Button>
  )
}
