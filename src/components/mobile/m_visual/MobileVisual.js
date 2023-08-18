import React from 'react'
import styles from './mobilevisual.module.css'

export default function MobileVisual() {
  return (
    <section id={styles.visual_wrap}>
      <h2 className='hidden'>오늘의 도서</h2>
      <ul id={styles.visual_inner}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  )
}
