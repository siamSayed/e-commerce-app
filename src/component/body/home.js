import React, { Component, useEffect } from "react"
import { connect } from "react-redux"
import {useNavigate} from "react-router-dom"
let {useState}=React


const func=(state)=>{
    return {
        a:state.data,
        comments:state.comments,
        name:state.name
    
    }
}
class  Home extends Component{
    
    
    render(){
        document.title="MangaBD | Home"
        
    
        return(
            <div className="content">
                   <div><h1>Home</h1></div>
                   <p>this is home component</p>  
                   <div className="btns">
    
                   
                   </div>
                    
            </div>
        )
    }
    
}

export default connect(func)(Home)