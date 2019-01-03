import React from "react"
import {Menu,Input,Icon,Button} from "semantic-ui-react"
import "./Header.css"
class Header extends React.Component{
constructor(props){
    super(props);
     this.state={
activeItem: 'home'
    }
}
 handleItemClick = (e, { name }) => this.setState({ activeItem: name })
 render(){
        const { activeItem } = this.state
     return(
         <div className="header-menu"> 
          <Menu secondary >
           <Menu.Item><h2 className="logo">LAB</h2></Menu.Item>
         <Menu.Menu position='left'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' onChange={e=>{this.props.onSearchChange(e.target.value)}} value={this.props.search} />
          </Menu.Item>
         </Menu.Menu>
         <Menu.Menu position="right">
        <Button>
  <Icon name='home' />
  </Button>
     <Button position='floatright'>
  <i className="question circle icon"></i>
  </Button>
     <Button style={{textAlign:'right'}}>
  <Icon name='bell outline' />
  </Button>
</Menu.Menu>
        
        
      </Menu></div>
     )
 }
}
export default Header