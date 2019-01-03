import React,{Component} from "react"
import "./Sidenav.css"
import {Icon} from "semantic-ui-react"
const Sidenav=(props)=>{
    return (
        <div className="sidenav">
 <Icon name='home' className="icon-sidenav"/>
 <Icon name='file' className="icon-sidenav" />
 <Icon name='send' className="icon-sidenav" />
  </div>
    )
}
export default Sidenav;
