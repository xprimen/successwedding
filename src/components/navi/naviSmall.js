import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { base_url } from '../../constant'

export default props => {
  const listItemSmall = () => {
    return props.menuTop.map((data, i) => {
      const menu_link = data.menu_link == 'home' ? '' : data.menu_link
      const buatLink =
        data.prefix_menu_link !== ''
          ? '/' + data.prefix_menu_link + '/' + menu_link
          : '/' + menu_link
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
            <Nav.Link href={buatLink}>{data.menu_name}</Nav.Link>
          </Nav.Item>
        )
      }
    })
  }

  return (
    <>
      <Navbar
        expand="md"
        bg="dark"
        variant="dark"
        id="navbar-small"
        className="my-0 d-md-none d-flex fixed-top"
        collapseOnSelect
      >
        <Navbar.Toggle aria-controls="small-nav" />
        <Navbar.Brand className="d-flex" href="/">
          <span className="mr-2 align-self-center logo-text">
            {props.websiteData.data.company_name}
          </span>
          <img
            src={
              base_url +
              '/assets/' +
              props.websiteData.data.path_logo +
              props.websiteData.data.logo
            }
            className="img-fluid"
            alt={props.websiteData.data.company_name}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </Navbar.Brand>
        <Navbar.Collapse id="small-nav" className="dual-nav w-100 order-1">
          <Nav as="ul" className="mr-auto nav-fill w-100">
              {listItemSmall()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
