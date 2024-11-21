import React, { useEffect, useState } from 'react'
import Banner from '../assets/home.png'
const Home = () => {

  return (
    <section>
      <img src={Banner} className='rounded-3' style={{width: '1720px', margin: '0 100px'}} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
