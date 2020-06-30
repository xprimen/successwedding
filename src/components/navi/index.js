import React from 'react'
import { useSelector } from 'react-redux'
import NaviBig from './naviBig'
import NaviSmall from './naviSmall'

const Navi = ({ shrink, ...props }) => {
  const { menu, wd } = useSelector(state => state)

  return (
    <header>
      <NaviBig menuTop={menu.top} websiteData={wd} shrink={shrink} />
      <NaviSmall websiteData={wd} menuTop={menu.top} />
    </header>
  )
}

export default Navi
