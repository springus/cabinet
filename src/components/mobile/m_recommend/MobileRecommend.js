import React from 'react'
import styles from './mobilerecommend.module.css'

export default function MobileRecommend() {
  return (
    <section id={styles.recommend_wrap}>
      <h2 className='hidden'>추천도서</h2>
      <ul id={styles.recommend_inner}>
        <li>#베스트셀러
        </li>
        <li>#신규 도서</li>
        <li>#추천 도서</li>
        <li>#스테디 셀러</li>
      </ul>
      <ul id={styles.bestseller_inner}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p id={styles.morebook}>더 많은 책 보기<span><i className="fa-solid fa-caret-right"></i></span></p>
    </section>
  )
}
