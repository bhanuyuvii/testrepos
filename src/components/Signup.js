import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col,FormFeedback} from 'reactstrap';
class Signup extends Component
{
constructor(props)
{
    super(props);
    this.state=({
        address:false,
        name:"",
        mail:"",contact:"",password:"",repeatpassword:"",plot:"",city:"",pin:"",residentstate:"",
        nameError:"",mailError:"",passwordError:"",contactError:"",addressError:"",accountCreated:false,
        userName:"SignIn/SignUp"
    })
    this.setname=this.setname.bind(this);
    this.setcontact=this.setcontact.bind(this);
    this.setpassword=this.setpassword.bind(this);
    this.setrepeatpassword=this.setrepeatpassword.bind(this);
    this.setmail=this.setmail.bind(this);
    this.createAccount=this.createAccount.bind(this);
}
falsestate()
{
this.setState({
    nameError:"",
    addressError:"",
    passwordError:"",
    contactError:"",
    mailError:""

})
console.log("false state called");

}
setplot=(event)=>
{
    this.setState({plot:event.target.value})
}
setpin=(event)=>{
    this.setState({pin:event.target.value})
}
setcity=(event)=>
{
    this.setState({city:event.target.value})
}
setresidentstate=(event)=>
{
    this.setState({residentstate:event.target.value})
}

    setname=(event)=>
{
    this.setState({
        name:event.target.value
    })
   // console.log(this.state.name);
}
setmail=(event)=>
{
    this.setState({mail:event.target.value})
}
setcontact=(event)=>
{
    this.setState({contact:event.target.value})
}
setpassword=(event)=>
{
    this.setState({password:event.target.value})
}
checkcontact(value)
{
    
    
    for(var i=0;i<value.length;i++)
    {
        if(!(value[i]>=0 && value[i]<=9))
        return false
        
    }
    return (value.length===10?true:false)
}
setrepeatpassword=(event)=>{this.setState({repeatpassword:event.target.value})}

createAccount()
{
    

this.setState({
    nameError:(this.state.name==="")?"Name Cannot be Empty":"",
    mailError:this.state.mail===""?"Email cannot be empty":"",
    contactError:this.checkcontact(this.state.contact)?"":"Incorrect Contact number",
    passwordError:(this.state.password===this.state.repeatpassword && this.state.password!="")?"":"Passwords dont match",
    addressError:(this.state.plot==="" || this.state.city==="" ||this.state.residentstate==="" || this.state.pin==="")?
    "Address in not filled":""
    
})
console.log(this.state.nameError);
console.log(this.state.passwordError);
console.log(this.state.addressError);
if(this.state.nameError=="" && this.state.passwordError==="" && this.state.contactError==="" && this.state.mailError==="" && this.state.addressError==="" && this.state.name!="")
{
this.setState({
    accountCreated:true
})
console.log("Account Created");
}

}



    render()
    {
        return <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Enter Name</Label>
              <Input type="text" value={this.state.name} onChange={this.setname} placeholder="ABC!23" />
              <div style={{fontSize:17,color:"red"}}>{this.state.nameError}</div>
            
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Enter Mail</Label>
              <Input type="text" value={this.state.mail} onChange={this.setmail} placeholder="someone@example.com" />
              <div style={{fontSize:17,color:"red"}}>{this.state.mailError}</div>
            
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
            <FormGroup>
                <Label>Enter ContactNo:</Label>
                <Input type="text" value={this.state.contact} onChange={this.setcontact} placeholder="1234567890"/>
                <div style={{fontSize:17,color:"red"}}>{this.state.contactError}</div>
            </FormGroup>
           
         <Label>Enter Password</Label>
          <Input type="password" value={this.state.password} onChange={this.setpassword} placeholder="******"/>
        </FormGroup>
        <FormGroup>
          <Label>Repeat Password</Label>
          <Input type="password" value={this.state.repeatpassword} onChange={this.setrepeatpassword} placeholder="******"/>
          <div style={{fontSize:17,color:"red"}}>{this.state.passwordError}</div>
            
        </FormGroup>
        
        <FormGroup>
            
            <Button onClick={this.createAccount}>CreateAccount</Button>
            {this.state.accountCreated===true?<div>
                <div style={{fontSize:17,color:"Green"}}>Account Created Successfully..Click</div>
                <Link to={{pathname:"/login",state:{modal:true,username:this.state.mail}}} className="ml-auto">
            here
                </Link>
                <p>to Login through Your Account</p>
        
            </div>:<div></div>
            }
            <div style={{fontSize:17,color:"red"}}>{this.state.addressError}</div>
        
        </FormGroup>
           
        <Button disabled={this.state.address==true} onClick={()=>
        {
            this.setState({
                address:true
            })
        }} >+</Button><Label>Add Address</Label>
      {this.state.address===true?
       <div>
       <FormGroup>
                 <Label>Address </Label>
                 <Input type="text" value={this.state.plot} onChange={this.setplot.bind(this)} placeholder="Apartment, studio, or floor"/>
               </FormGroup>
               <Row form>
                 <Col md={6}>
                   <FormGroup>
                     <Label >City</Label>
                     <Input type="text" value={this.state.city} onChange={this.setcity.bind(this)} placeholder="exampleCity"/>
                   </FormGroup>
                 </Col>
                 <Col md={4}>
                   <FormGroup>
                     <Label for="State">State</Label>
                     <Input type="text" value={this.state.residentstate} onChange={this.setresidentstate.bind(this)} placeholder="exampleState"/>
                   </FormGroup>
                 </Col>
                 <Col md={2}>
                   <FormGroup>
                     <Label>PinCode</Label>
                     <Input type="text" value={this.state.pin} onChange={this.setpin.bind(this)} placeholder="exampleZip"/>
                   </FormGroup>  
                 </Col>
                
               </Row>
              
               <Button onClick={()=>
            {
                this.setState({
                    address:false
                })
            }}>Save</Button>

           
       
       
       
               </div>
       
    
    
    
    :<div></div>}
    
      </Form>  
    }
}
export default Signup