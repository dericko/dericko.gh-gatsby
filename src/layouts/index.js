import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import './styles/index.css'
import styles from './styles/index.module.css'

type Props = {
  children: Function,
  data: Object,
}

export default ({ children, data }: Props) => {
  const { title, description, keywords } = data.site.siteMetadata
  return (
    <main>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      <Header />
      <section className={styles.children}>{children()}</section>
      <Footer />
    </main>
  )
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
