import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { base_url } from '../../constant'

const Meta = ({ title, keywords, desc, url, image }) => {
  const wd = useSelector(state => state.wd)
  title = title ? `${title} | ${wd.data.company_name}` : wd.data.company_name
  keywords = keywords ? wd.data.meta_key + ',' + keywords : wd.data.meta_key
  desc = desc ? desc : wd.data.meta_desc
  url = url ? wd.data.website_name + '/' + url : wd.data.website_name
  image = image
    ? base_url + '/' + image
    : base_url + '/assets/' + wd.data.path_logo + wd.data.logo
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        // {
        //   name: 'twitter:site',
        //   content: `@${get(site, 'twitter')}`,
        // },
        { property: 'title', content: title },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        {
          property: 'keywords',
          content: keywords,
        },
        {
          property: 'description',
          content: desc,
        },
        {
          property: 'og:description',
          content: desc,
        },
        {
          property: 'og:url',
          content: url,
        },
        /* {
          name: 'canonical',
          content: url,
        }, */
        {
          property: 'og:image',
          content: image,
        },
      ]}
    >
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
export default Meta
