import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Input} from 'reactstrap';
import Navbar from './Navbar';
import {ProductConsumer} from '../context';
//import {Route} from 'react-router-dom';
import Home from './Home';

import {Route,Link,Redirect} from 'react-router-dom';
//import {browserHistory} from 'react-router';
class Login extends Component{d
constructor(props)
{
    super(props);
   // console.log(props.location.state)   ;
   this.state=(
        {
            username:"",
            password:"",
            modals:true,
            redirect:false
        }
    )
    this.toggle=this.toggle.bind(this);
    this.handlePassWord=this.handlePassWord.bind(this);
    this.handleUserName=this.handleUserName.bind(this);
    this.navigate=this.navigate.bind(this);
  //  this.setRedirect=this.setRedirect.bind(this);

}
    handleUserName=(event)=>
    {
        this.setState({
            username:event.target.value
        })
    }
    handlePassWord=(event)=>
    {
        this.setState({
            password:event.target.value
        })
    }
    toggle() {
        this.setState(prevState => ({
          modals: !prevState.modals
        }));
       
    }
    navigate()
    {
        if(this.state.password==="bhanu")
        {
        return <Redirect to="/home" />
        
        }
        else
        return <Navbar />
        
        //alert("Wrong Password");
    }
    
   


render()
{
    //this.props.location.modal=true;  

   // modal=this.props.location.state
 
    
   //console.log(this.state.modals);
    return (
        <div>
           
<Modal isOpen={this.state.modals} toggle={this.toggle}>
<Link to="/home">
<ModalHeader toggle={this.toggle}></ModalHeader>
    
    </Link>
<ModalBody>
    <Label>UsernName</Label>
    <Input type="text" value={this.state.username} placeholder="ABC" onChange={this.handleUserName}></Input>
    <Label>Password</Label>
    <Input type="password" placeholder="******" onChange={this.handlePassWord}></Input>
  
</ModalBody>
<ModalFooter>
        
<ProductConsumer>{value=>(
    <Button color="primary" onClick={()=>
        {
         if(this.state.password===value.getPassword(this.state.username))
         {
             value.setUserName(this.state.username) 
             const temp=value.users.find(item=>item.username===this.state.username);

            value.setUserAddress(temp.address);
             console.log(value.currentUserAddress);
        this.props.history.push("/");
         }
         else
         alert("Either wrong password or username");
        }}>SignIn</Button>

)}
</ProductConsumer>

    

<Link to="/signup">
<Button color="primary">SignUp</Button>
</Link>
    </ModalFooter>
</Modal>

        </div>
    )
}
}

export default Login