import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { getProductDetail } from '../../api/firebase'

export default function MobileProductDetail() {

  const { bookId } = useParams()

  const [products] = useProducts()

  const [productItem, setProductItem] = useState([])

  useEffect(() => {
    getProductDetail(bookId).then((response) => {
      setProductItem(response)
    })
  }, [products])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[bookId])



  return (
    <div style={{width:"200px"}}>
      <img src={productItem.images} style={{width:"100%", display:"block"}}/>
    </div>
  )
}
