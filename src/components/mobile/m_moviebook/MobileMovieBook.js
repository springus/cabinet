import React from 'react'
import styles from './mobilemoviebook.module.css'

export default function MobileMovieBook() {
  return (
    <section id={styles.moviebook_wrap}>
      <h2 id={styles.moviebook_title}>책과 함께</h2>
        <ul id={styles.moviebook_inner}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
    </section>
  )
}
