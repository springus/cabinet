import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './mobileproductlist.module.css'
import useProducts from '../../hooks/useProducts'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

export default function MobileProductList() {

  const [products] = useProducts()

  const categoryThema = [
    { index: 0, text: "전체" },
    { index: 1, text: "소설" },
    { index: 2, text: "인문" },
    { index: 3, text: "과학" }
  ]

  const categoryInner = useRef()
  const allClickIndex = useRef()
  const clickIndex = useRef()

  let clickCategory = useMemo(() => (false), [])

  const openCategory = useCallback(() => {
    // if (clickCategory !== true) {
    //   gsap.set(categoryInner.current, { overflow: "visible" })
    //   clickCategory = true
    // } else {
    //   gsap.set(categoryInner.current, { overflow: "hidden" })
    //   clickCategory = false
    // }

    clickCategory !== true && gsap.set(categoryInner.current, { overflow: "visible" })

  })

  const allClick = useCallback(()=>{
    

  })

  const [selectCategoryThema, setSelectCategoryThema] = useState(categoryThema[0].text)

  const [selectItems, setSelectItems] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (selectCategoryThema === "전체") {
      setSelectItems(products)
    } else {
      const filteredItem = products.filter((item) => (item.category === selectCategoryThema))
      setSelectItems(filteredItem)
    }
  }, [products, selectCategoryThema])

  return (
    <section id={styles.basket_wrap}>
      <h2>장바구니</h2>
      <div id={styles.basket_category}>
        <span id={styles.basket_category_title}>카테고리</span>
        <ul id={styles.basket_category_inner} ref={categoryInner}>
          {
            categoryThema.map((item) => (
              <li key={item.index} onClick={() => {
                setSelectCategoryThema(item.text)
                //console.log(selectCategoryThema)
              }}>{item.text}</li>
            ))
          }
        </ul>
        <button onClick={openCategory}><i className="fa-solid fa-sort-down"></i></button>
      </div>
      <div id={styles.basket_select_wrap}>
        <input id={styles.select_check} type='checkbox' ref={allClickIndex} onClick={allClick} />
        <p id={styles.select_all}>전체 선택</p>
        <p id={styles.select_delete}>선택 삭제</p>
      </div>
      <div id={styles.basket_inner_wrap}>
        <ul id={styles.bakset_inner}>
          {
            selectItems.map((item) => (
              <li key={item.id} onClick={() => {
                navigate(`/MobileProductList/${item.id}`)
              }}>
                <div id={styles.basket_list_wrap}>
                  <input type='checkbox' ref={clickIndex} />
                  <img src={item.images} alt='책제목' />
                  <span id={styles.basket_list_title}>{ }</span>
                  <span id={styles.basket_list_author}></span>
                  <span id={styles.basket_list_publish}></span>
                  <span id={styles.basket_list_day}></span>
                  {/* <button id={styles.basket_list_detail}></button> */}
                  <p id={styles.basket_list_text}></p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
