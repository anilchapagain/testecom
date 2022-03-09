import React from "react"
import './Home.css'
import axios from 'axios';
import Cards from "../Components/Cards.components";
import { Button } from "bootstrap";
import './Lead.css'
import Charts from "../Components/Charts.components";
import Filter from "../Components/Filter.components";
export default function Lead(){

    return(
       <div className='container'>
           <Filter/>
 {/* <div className="Lead">
            <Cards/>
            </div>
<Charts/> */}

    

       </div>
    )

}