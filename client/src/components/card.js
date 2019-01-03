import React from 'react'
import { Card, Icon,Image,Button, Checkbox, Form ,Grid} from 'semantic-ui-react'
import './card.css'
// import '../images.png'



// class CardExampleExtraContent extends React.Component{
const CardExampleExtraContent = (props) => {
 
 
  
return(
  <div>
  <Card fluid>
  <Grid divided="vertically">
<Grid.Row columns={2}>
    
    <Grid.Column><Image src='../images.png' /></Grid.Column>
    
    <Grid.Column>
 {props.equipment.map((equip,i)=>{if(props.id===equip._id){return <div key={i}>
  <Form>
    <Form.Field>
      <label>Equipment Name</label>
      <input placeholder={equip.EquipmentName} value={equip.EquipmentName} readOnly />
    </Form.Field>
    <Form.Field>
      <label>Vendor Name</label>
      <input placeholder={equip.Vendorname} value={equip.Vendorname} readOnly />
    </Form.Field>
    <Form.Field>
      <label>Location</label>
      <input placeholder={equip.Location} value={equip.Location} readOnly />
    </Form.Field>
    <Form.Field>
      <label>Model</label>
      <input placeholder={equip.Model} value={equip.Model} readOnly />
    </Form.Field>
    <Form.Field>
      <label>Serial</label>
      <input placeholder={equip.Serial} value={equip.Serial} readOnly />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder={equip.Description} value={equip.Description} readOnly />
    </Form.Field>

   </Form>
 </div>}})}
    </Grid.Column>

  </Grid.Row>
  </Grid>
  </Card>
  </div>
  )
}

export default CardExampleExtraContent