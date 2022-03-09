import React from "react"
import './Home.css'
import axios from 'axios';
import Cards from "../Components/Cards.components";
import { Button } from "../Components/resuable/button";
import { propTypes } from "react-bootstrap/esm/Image";
import Reuse from "../Components/reuse.component";
import Reusetwo from "../Components/reusetwo.component";
export default function Home(){

	
	


    return(
        <div className="Home">
            <div className='col30'>
<Reuse/>
            </div>
            <div className='col30'>
            <Reusetwo/>
            </div>
            <div className='col30'>
       jbjbjkbjk
            </div>
        </div>)

}