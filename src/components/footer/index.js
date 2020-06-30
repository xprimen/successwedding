import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { base_url } from '../../constant'

const Footer = () => {
  const { menu, wd } = useSelector(state => state)

  const whatsappLink = phone_only => {
    if (!wd.loading) {
      let phone = wd.data.phone !== undefined ? wd.data.phone.substr(1) : null
      if (phone_only) {
        return '+62' + phone
      } else {
        return 'https://wa.me/62' + phone
      }
    } else {
      return null
    }
  }

  if (!wd.loading) {
    return (
      <footer id="footer" className="py-5">
        <Container fluid={true}>
          <Row className="justify-content-around">
            {/* <Col sm={12}>
            <Nav
              defaultActiveKey="/"
              as="nav"
              className="nav bg-transparent justify-content-center"
            >
              {linkItem()}
            </Nav>
          </Col> */}
            <Col sm={4}>
              <div className="text-center desc">
                <a href={'tel:' + whatsappLink(true)}>{whatsappLink(true)}</a>
                <h2>PALEMBANG | SUMATERA SELATAN</h2>
                <span>{wd.data.email}</span>
              </div>
              <hr />
              <Nav
                defaultActiveKey="/"
                as="ul"
                className="list-inline socmed-list justify-content-center mt-3"
              >
                <Nav.Item as="li" className="list-inline-item">
                  <Nav.Link
                    href={
                      'https://www.instagram.com/' + wd.data.instagram_account
                    }
                    className="text-dark rounded p-2"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="list-inline-item">
                  <Nav.Link
                    href={whatsappLink()}
                    className="text-dark rounded p-2"
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={4}>
              <Link to="/">
                <div className="logo-wrapper">
                  <img
                    src={base_url + '/assets/img/logo/logo.png'}
                    className="img-fluid logo"
                    alt={wd.data.company_name}
                  />
                </div>
              </Link>
              {/* <p className="text-center">
              &copy; {state.websiteData.launching} All Right Reserved
              <br />
              {state.websiteData.company_name}
            </p> */}
            </Col>
          </Row>
        </Container>
      </footer>
    )
  } else {
    return <></>
  }
}

export default Footer
