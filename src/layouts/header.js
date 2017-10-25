import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo.png'

import styles from './styles/header.module.scss'

export default () => (
  <header className={styles.header}>
    <Link to="/">
      <img className={styles.logo} src={logo} alt="Logo" />
    </Link>
    <div className={styles.links}>
      <Link to="/writing">Writing</Link>
      <Link to="/software">Software</Link>
      <Link to="/about">About</Link>
    </div>
  </header>
)
