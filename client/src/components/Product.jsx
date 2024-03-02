import React from 'react'
import { NavLink } from 'react-router-dom'
const Product = ({ job }) => {
    return (
        <NavLink to={`/job/${job._id}`} >
            <div class="jobItemCard">
                <h3>{job.title}</h3>
                <h4>{job.companyName}</h4>
                <h4>Posted by Balasundaram Santosh</h4>
                <ul>
                    <li>{job.salary === '' ? <> Not Disclosed </> : <> $ 2-7 Lacs PA </>} &nbsp; | &nbsp; <i class='bx bx-map'></i> Hybrid - Hyderabad</li>
                </ul>
            </div>
        </NavLink>
    )
}

export default Product
