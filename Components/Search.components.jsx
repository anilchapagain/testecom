import { render } from "@testing-library/react"
import { Component } from "react"
import { FiSearch } from 'react-icons/fi';
export default class Search extends Component{
    render(){
        return(
            <div className='search' >
            <input type= 'text'
            
            // value =  {this.state.searchTerm} onChange = {this.editSearchTerm}
             placeholder = 'Ask Me !'/>
            <FiSearch/>
          </div>
        )
    }
}