import React from 'react'
import Link from 'gatsby-link'

import profilePhoto from '../assets/profile-photo.jpg'

import styles from './styles/index.module.scss'

export default ({ data }) => (
  <div className={styles.container}>
    <section className={styles.intro}>
      <img src={profilePhoto} alt="Profile photo" />
      <p>
        Hi there, my name's Derick. I write fiction and creative non-fiction. I
        also offer freelance software services.
      </p>
    </section>
    <section className={styles.links}>
      <Link className={styles.link} to="/writing">
        Writing
      </Link>
      <Link className={styles.link} to="/software">
        Software
      </Link>
    </section>
  </div>
)
