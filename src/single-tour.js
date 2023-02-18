import React,{useState} from "react";
import './index.css'

function SingleTour({id,info,price,image,name,removeTour}){

  const [readMore,setReadmore]=useState(false);
  return(
    <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
        <div className="price-info">
            <h4>{name}</h4>
            <h4 className="price">${price}</h4>
        </div>
        <p>
          {
            readMore? info : `${info.substring(0,200)}...`
          }
        <button className="btn-one" onClick={()=> setReadmore(!readMore)}>{readMore? 'See Less': 'Read More'}</button>
        </p>
        <button className="btn-two" onClick={()=> removeTour(id)}>Not Interested</button>
    </footer>
    </article>
  )
}
  
export default SingleTour