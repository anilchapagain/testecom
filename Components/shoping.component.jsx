import { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default class Shopping extends Component{
    render(){
        return(
            <div className='shopping'>
                <FiShoppingCart/>
                <span>0</span>
            </div>
        )
    }
}