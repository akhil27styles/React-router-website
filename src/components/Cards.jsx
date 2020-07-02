import React from 'react'
const Cards = (props) => {
    return (
        <>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className="col-md-4 col-10 mx-auto"></div>
        <div className="card">
        <img src={props.imgsrc} className="card-img-top" alt="Services"/>
        <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </>
    )
}

export default Cards
