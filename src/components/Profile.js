import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import { Button, Form, FormGroup, Label, Input, FormText,Col} from 'reactstrap'
import { Collapse,CardBody, Card } from 'reactstrap';
import Address from './Address';
import Product from './Product';
class Profile extends Component
{
constructor(props)
{
    super(props);
    this.state=({
        contact:"",
        collapse:false,
        contactEdit:true,
        mail:""
    })
    this.setContact=this.setContact.bind(this);
    
 this.toggle=this.toggle.bind(this);   
    this.changeContact=this.changeContact.bind(this);
}
setContact=(event)=>
{
    if(this.state.contactEdit)
    {
this.setState(
    {
        contact:event.target.value
    })
}
}
setMail=(event)=>
{
    this.setState({
mail:event.target.value
    })
}
toggle()
{
this.setState(prevState=>(
    {
  collapse:!prevState.collapse
    })
)
}
changeContact()
{
    this.setState(prevState=>
        ({
            contactEdit:!prevState.contactEdit
        }))
}

    render()
    {
        return(
            <div>
                <ProductConsumer>
                    {value=>
                    {
                        
                       const temp=value.users.find(item=>item.username===value.username);
                      // cconst res= value.users.find(item=>item.username===value.username);
    // console.log(value.currentUserAddress);
                       //this.state.contact=temp.contact;
                       //this.setState({contact:temp.contact})
                return <Form>
   <FormGroup row>
<Label sm={2}>Name</Label>
<Col sm={5}>
<Input type="text" readOnly value={temp.name} />
</Col>
</FormGroup>
<FormGroup row>
<Label sm={2}>Contact</Label>
<Col sm={5}>
<Input type="text" value={temp.contact} onChange={this.setContact}  />

</Col>
<Button onClick={this.changeContact}>Edit</Button>
</FormGroup>
<FormGroup row>
<Label sm={2}>Email</Label>
<Col sm={5}>
<Input type="text" readOnly value={temp.email}/>
</Col>
</FormGroup>
</Form>
                  
                  
                  
                  
                  
                  }}
                </ProductConsumer>
<Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View All Address</Button>
 
<Collapse isOpen={this.state.collapse}>

    <ProductConsumer>
{value=>
{
    return (value.currentUserAddress.map(address=>
        {
            return <Card>
                <CardBody>             
                    <Address key={address.id} address={address}/>
        </CardBody>
        </Card>
        }))

}}


   </ProductConsumer> 
       
        </Collapse>
<ProductConsumer>
    {value=>
    {
       return <Button color="primary" onClick={()=>
        {
       console.log(value.currentUserOrders);
         }} style={{ marginBottom: '1rem' }}>View Past Orders</Button>
    }}
        </ProductConsumer>
                
                
            </div>
        )
    }
}
export default Profile