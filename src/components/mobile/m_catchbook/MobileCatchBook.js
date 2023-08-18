import React from 'react'
import styles from './mobilecatchbook.module.css'

export default function MobileCatchBook() {
  return (
    <section id={styles.catchbook_wrap}>
      <h2 id={styles.catchbook_title}>캐치 앤 북</h2>
      <dl id={styles.author_inner}>
        <dt className={styles.author_title}>오늘의작가</dt>
        <dt className={styles.author_title}>베르나르베르베르</dt>
        <dd className={styles.author_text}><span className={styles.author_intro}>출생</span>1961년 9월 18일 (61세)</dd>
        <dd className={styles.author_text}><span className={styles.author_intro}>국적</span>프랑스</dd>
        <dd className={styles.author_text}><span className={styles.author_intro}>장르</span>과학 소설, 추리 소설, 철학 소설</dd>
        <dd className={styles.author_text}><span className={styles.author_intro}>작품</span>개미, 뇌, 파피용, 제3인류 등</dd>
      </dl>
      <div id={styles.author_img}>
        <p></p>
      </div>
      <div id={styles.author_book}>
        <div id={styles.author_book_img}></div>
        <div id={styles.author_book_text}></div>
      </div>
    </section>
  )
}
