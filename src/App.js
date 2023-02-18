import React,{useState,useEffect} from "react";
import Loading from "./loading";
import Tour from "./Tour";
import './index.css'

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading,setLoading] = useState(true);
  const [tour,setTour]= useState([]);
  
  const removeTour = (id)=>{
    const filterTour = tour.filter((tour)=> tour.id !== id)
    setTour(filterTour)
  }

  const getTour = async()=>{
   
   try {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false)
    setTour(data);
   } catch (error) {
    setLoading(false);
    alert(error)
   }
  }

  useEffect(()=>{
    getTour()
  },[])

  if(loading){
    return(
      <Loading/>
    )
  }
  if(tour.length === 0){
    return(
      <main>
        <div className="refresh">
          <h1>No Tours Left</h1>
          <button onClick={()=> getTour()}>Refresh</button>
        </div>
      </main>
    )
  }
  else{
    return(
      <Tour tour = {tour} removeTour = {removeTour}/>
    )
  }
}

export default App;
