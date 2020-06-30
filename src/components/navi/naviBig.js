import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { base_url } from '../../constant'

export default props => {
  const linkItem = () => {
    return props.menuTop.map((data, i) => {
      const menu_link = data.menu_link == 'home' ? '' : data.menu_link
      const buatLink =
        data.prefix_menu_link !== ''
          ? '/' + data.prefix_menu_link + '/' + menu_link
          : '/' + menu_link
      if (i % 3 == 0) {
        if (i == 3) {
          return (
            <React.Fragment key={data.menu_id}>
              <Nav.Item as="li">
                {/* <FadeIn delay={100}> */}
                <Nav.Link href="/" className="navbar-brand">
                  <div className="logo-wrapper">
                    <img
                      src={
                        base_url +
                        '/assets/' +
                        props.websiteData.data.path_logo +
                        props.websiteData.data.logo
                      }
                      className="img-fluid logo"
                      alt={props.websiteData.data.company_name}
                    />
                  </div>
                </Nav.Link>
                {/* </FadeIn> */}
              </Nav.Item>
              <Nav.Item as="li">
                {/* <FadeIn delay={100}> */}
                <Nav.Link href={buatLink}>{data.menu_name}</Nav.Link>
                {/* </FadeIn> */}
              </Nav.Item>
            </React.Fragment>
          )
        } else {
          if (data.menu_link == 'search') {
            return (
              <Nav.Item as="li" key={data.menu_id}>
                {/* <FadeIn delay={100}> */}
                <Nav.Link href="/">
                <i className="fa fa-search" aria-hidden="true"></i>
                </Nav.Link>
                {/* </FadeIn> */}
              </Nav.Item>
            )
          } else {
            return (
              <Nav.Item as="li" key={data.menu_id}>
                {/* <FadeIn delay={100}> */}
                <Nav.Link href={buatLink}>{data.menu_name}</Nav.Link>
                {/* </FadeIn> */}
              </Nav.Item>
            )
          }
        }
      } else {
        return (
          <Nav.Item as="li" key={data.menu_id}>
            {/* <FadeIn delay={100}> */}
            <Nav.Link href={buatLink}>{data.menu_name}</Nav.Link>
            {/* </FadeIn> */}
          </Nav.Item>
        )
      }
    })
  }

  /* const listing = () => {
    if (props.loading) {
      return () => {
        for (a = 0; a <= 5; a++) {
          return <TinyLoader key={a} background="#000000" height="1.5em" />
        }
      }
    } else {
      return linkItem()
    }
  } */

  const shrink = props.shrink ? 'shrink' : ''
  return (
    <Navbar
      expand="md"
      id="navbar-top"
      className={'fixed-top my-0 d-none d-md-flex ' + shrink}
    >
      <Container fluid={true}>
        <Navbar.Collapse className="w-100 order-1">
          <Nav as="ul" className="mr-auto nav-fill w-100">
            {linkItem()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
