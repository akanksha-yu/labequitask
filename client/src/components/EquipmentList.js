import React, { Component } from "react"
import "./EquipmentList.css"
import { Table } from "semantic-ui-react"
class EquipmentList extends Component {
  constructor(props) {
    super(props)
    this.state={
      show:false
    }
  }
  render() {

    return (
      <div>   <Table striped>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell style={{cursor:"pointer",'backgroundColor':"blue",color:'white','text-align':'center'}}  onClick={e=>this.setState({show:!this.state.show})}>System</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        {this.state.show && <Table.Body>
          {this.props.list.map((equip,i) => <Table.Row key={i}>
            <Table.Cell style={{cursor:"pointer",'text-align':'center'}} onClick={e => { this.props.showCard(equip._id) }}>{equip.EquipmentName}</Table.Cell>

          </Table.Row>)}

        </Table.Body>}</Table></div>
    )

}

}

export default EquipmentList;