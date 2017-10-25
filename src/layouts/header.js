import React from 'react'
import Link from 'gatsby-link'

import styles from './styles/header.module.css'

export default () => (
  <header className={styles.header}>
    <div className={styles.titleContainer}>
      <h1 style={{ margin: 0 }}>
        <Link className={styles.title} to="/">
          Gatsby
        </Link>
      </h1>
    </div>
  </header>
)
