import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col,Row} from 'reactstrap'
import { Collapse,CardBody, Card } from 'reactstrap';

class Address extends Component{

    
render()
{
    const {plot,street,city,address,state,pin}=this.props.address;
    return (
   <Form>
       <FormGroup>
                 <Label>Plot</Label>
                 <Input type="text" readOnly value={plot}/>
               </FormGroup>
               <Col md={2}>
                   <FormGroup>
                     <Label for="Street">Street</Label>
                     <Input type="text" readOnly value={street}/>
                   </FormGroup>
                 </Col>
               <Row form>
                 <Col md={2}>
                   <FormGroup>
                     <Label >City</Label>
                     <Input type="text" readOnly value={city}/>
                   </FormGroup>
                 </Col>
                 <Col md={2}>
                   <FormGroup>
                     <Label for="State">State</Label>
                     <Input type="text" readOnly value={state}/>
                   </FormGroup>
                 </Col>
                 
                 <Col md={2}>
                   <FormGroup>
                     <Label>PinCode</Label>
                     <Input type="text" readOnly value={pin}/>
                   </FormGroup> 
                   </Col> 
                   </Row>
      
   </Form>

)
}
}

export default Address