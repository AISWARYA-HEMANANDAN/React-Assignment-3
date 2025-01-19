import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header2 from '../components/Header2';

function Productdetailspage() {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Header2 />

      <div className="container my-4">
        <div className="row g-4">
          <div className="col-md-6 product-image">
            <img src={product?.image} alt=""/>
          </div>
          <div className="col-md-6">
            <h2>{product?.title}</h2>
            <p className="text-muted">{product?.category}</p>
            <p>{product?.description}</p>
            <h3 className="text-primary">${product?.price}</h3>
            <button class="btn btn-success">Buy Now</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Productdetailspage
