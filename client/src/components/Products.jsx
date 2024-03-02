import React, { useEffect } from 'react'
import Product from './Product'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../redux/actions/jobs'
const Products = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.data);
    console.log(jobs);
    useEffect(() => {
        dispatch(getJobs());
    }, [dispatch])
    return (
        <div class="product-container">

            <div class="container">
                <Sidebar />
                <div class="product-box">

                    <div class="product-main">

                        <h2 class="title">New Products</h2>

                        <div class="product-flex">
                            {
                                jobs?.map((item,index) => {
                                    return (
                                        <Product job={item} key={index}  />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
