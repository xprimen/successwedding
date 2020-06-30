import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
//import './style.scss'

import { faArrowUp, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faTwitter, faInstagram, faWhatsapp, faArrowUp, faSearch)

const Icon = ({ name, prefix }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={[prefix, name]} />
    {/* <FontAwesomeIcon icon={name} /> */}
  </div>
)

export default Icon
