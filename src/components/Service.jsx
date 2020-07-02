import React from 'react'
import Cards from "./Cards"
import one  from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
import four from "../images/four.jpg"
import five from "../images/five.jpg"
import six from "../images/six.jpg"
const Service = () => {
    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {/* <div className="col-md-4 col-10 mx-auto"> */}
                            <Cards imgsrc={one} title="01" />
                            <Cards imgsrc={two} title="02"/>
                            <Cards imgsrc={three} title="03"/>
                            <Cards imgsrc={four} title="04"/>
                            <Cards imgsrc={five} title="05"/>
                            <Cards imgsrc={six}  title="06"/>
                          
                           
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Service
