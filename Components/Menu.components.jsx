import { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component{
    render(){
        return(

        <ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topic">Topics</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
					<Link to="/lead">Lead</Link>
					</li>
                    
				</ul>
    
            )
    }
}