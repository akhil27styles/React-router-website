import React from 'react'
import Footer from '../Footer'
const Common = (props) => {
    return (
        <>
          <section id="header"  className="d-flex align-items-center">
              <div className="container-fluid nav_bg">
                  <div className="row">
                      <div className="col-10 mx-auto">
                      <div className="row">
                          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" id="head">
                              <h1>
                                  {props.start}<strong className="brand-name"> Akhil Technical</strong>
                                  
                              </h1>
                              <h2 className="my-3">
                                  We are the team of talented developer making websites
                              </h2>
                              <div className="mt-3">
                                  <a href={props.visit} className="btn-get-started">
                                     {props.btname}
                                  </a>
                              </div>
                          </div>
                          <div className="col-lg-6 order-1 order-lg-2 header-img">
                              <img src={props.imgsrc} className="img-fluid animated" alt="home"/>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Footer/>
        </>
    )
}

export default Common
