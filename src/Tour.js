import React from "react";
import SingleTour from "./single-tour";
import './index.css'

function Tour({tour,removeTour}){
return(
    <main className="container">
        <div className="tour">
            <h1>Our Tours</h1>
            <div className="underline"></div>
        </div>
        {
            tour.map((tour)=>{
                return(
                    <SingleTour key={tour.id} {...tour} removeTour={removeTour}/>
                )
            })
        }
    </main>
)
}

export default Tour