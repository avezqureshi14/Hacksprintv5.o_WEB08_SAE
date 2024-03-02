import React from 'react'
import Products from '../components/Products'
import Banner from "../components/Banner"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import Service from "../components/Service"
const Home = () => {
  return (
    <div>
      <main style={{ marginTop: "2rem" }} >
        <Banner />
        <Products />
        <div className='container' >
          <div className="testimonials-box">
            <Testimonials />
            <CTA />
            <Service />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
