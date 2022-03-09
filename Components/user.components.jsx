import { Component } from "react";
import './user.css'
export default class User extends Component{
    render(){
        return (
            <div className='user'>
                <span>Name</span>
                <strong>SignOUt</strong>
            </div>
        )
    }
}