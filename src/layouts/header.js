import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo.png'

import styles from './styles/header.module.css'

export default () => (
  <header className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Logo" />
    </Link>
    <div className={styles.links}>
      <Link>Writing</Link>
      <Link>Software</Link>
      <Link>About</Link>
    </div>
  </header>
)
