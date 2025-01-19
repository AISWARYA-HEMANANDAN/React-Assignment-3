import { useState, useEffect } from 'react'
import axios from 'axios';
import React from 'react'
import Productcard from '../components/Productcard';
import Loading from '../components/Loading';
import Header from '../components/Header';

function Homepage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data);
            setProducts(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    return (
        <>
        <Header/>
            {products.length ?
                <div className="container my-4">
                    <div className="row g-4">
                        {products.map((product) => (
                            <div key={product.id} className="col-md-4 col-lg-3">
                                <Productcard item={product} />
                            </div>
                        ))}
                    </div>
                </div> : <Loading />
            }
        </>
    )
}

export default Homepage
