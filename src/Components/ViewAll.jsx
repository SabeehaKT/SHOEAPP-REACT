import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            {"Brand":"Nike","Size":45,"Price":1520},
            {"Brand":"Adidas","Size":48,"Price":3520},
            {"Brand":"Reebok","Size":36,"Price":2250},
            {"Brand":"Puma","Size":38,"Price":2590},
            {"Brand":"WoodLand","Size":35,"Price":2520},
            {"Brand":"NewBalance","Size":42,"Price":3500}
        ]
    )
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value, index)=> {
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Nike Shoes</h5>
                                            <p class="card-text">Size:45</p>
                                            <a href="#" class="btn btn-primary">Rs.1500</a>
                                        </div>
                                </div>
                            </div>
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll