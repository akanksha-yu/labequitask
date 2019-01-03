import React,{Component} from "react"
import "./Breadcrumb.css"
import {Breadcrumb} from "semantic-ui-react"
class Breadcrumbs extends Component{

    constructor(props){
        super(props)
    }

    render(){
       
        return(
            <div className="breadcrumb">
              <Breadcrumb size='large'>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section link>Device Name</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section active>{this.props.equipment.map((equip,i)=>{if(this.props.id===equip._id){return <div key={i}>{equip.EquipmentName}</div>}})}</Breadcrumb.Section>
  </Breadcrumb>
            </div>
        )
    }
}
export default Breadcrumbs