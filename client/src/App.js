import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Sidenav from "./components/Sidenav"
// import SidebarExampleVisible from "./components/Sidenav";
import Breadcrumbs from "./components/Breadcrumb"
import EquipmentList from "./components/EquipmentList"
import CardExampleExtraContent from "./components/card"
import './images.png'
import {connect} from "react-redux"
import {getEquipments} from "./actions/equipment"
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      search:""
    }
  }
  
  componentDidMount(){
    this.props.dispatch(getEquipments())
  }
  showCard=(id)=>{
    this.setState({id})
  }
  onSearchChange=(target)=>{
    this.setState({search:target})
  }
 render() {
  const filterdlist=this.props.Equipments.filter(equip=>equip.EquipmentName.includes(this.state.search))
  if(this.props.Equipments.length){
    return (
      <div className="App">
      <div><Header search={this.state.search} onSearchChange={this.onSearchChange}/></div>
        <div className="body-container">
        <div className="Sidenav">
        <Sidenav />
        </div>
        <div className="main-content">
       <Breadcrumbs id={this.state.id} equipment={this.props.Equipments}/>
        <div className="content-body">
        <div className="card"> <CardExampleExtraContent id={this.state.id} equipment={this.props.Equipments}/></div>
      
        <div className="list"><EquipmentList list={filterdlist} showCard={this.showCard}/></div></div>
        </div>
        </div>
      </div>
    )
  }
  else{
    return <div>...Loading</div>
  }
 }

}
const mapStateToProps=state=>{
    return{
    Equipments:state.Equipments
    }
}
export default connect(mapStateToProps)(App);
