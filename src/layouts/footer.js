import React from 'react'
import Link from 'gatsby-link'

import styles from './styles/footer.module.css'

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItem}>Contact</div>
      <div className={styles.footerItem}>Links</div>
      <div className={styles.footerItem}>Blurb</div>
    </footer>
  )
}
