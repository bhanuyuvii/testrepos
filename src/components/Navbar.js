
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import './Navbar.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Button } from 'reactstrap';
import { getPackedSettings } from 'http2';

class Navbar extends Component
{
    constructor(props)
    {
        super(props);
        this.toggle = this.toggle.bind(this);
      this.state=({
            dropdownOpen: false,
      
            userName:"SignIn/SignUp"
        })
        this.setUserName=this.setUserName.bind(this);
//this.getpass=this.getpass.bind(this);
    }
    toggle()
    {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
          }));
    }
    
    setUserName()
    {
        this.setState({
            userName:"Bhanu"
        })
        alert("Function alrtered");
    }
    render()

{
    console.log("Navbar Rendered");
        return ( 
       <div>       <ProductConsumer>
                {value=>
                (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
           
            <ul className="navbar-nav align-items-left">
            <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
            Home
            </Link>
            </li>
            <li className="nav-item ml-5">
            
            <Link to="/products" className="nav-link" >
            
            Products
            </Link>
                
                 
                </li>
                <li className="nav-item ml-5">
            
            <Link to="/contact" className="nav-link" >
            
            Contact Us
            </Link>
            <Button onClick={()=>
            {
                console.log("Hello");
               // console.log(value.tempPassword);
            }}
                >TestData</Button>
            
                
                 
                </li>
                
            </ul>
            
        {value.username==="SignIn/SignUp"?<Link to={{pathname:"/login",state:{modal:true,username:""}}} className="ml-auto">
            {value.username}
                </Link>:<div><Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {value.username}
        </DropdownToggle>
        <DropdownMenu right>
        <Link to="/profile">
          <DropdownItem>MyProfile</DropdownItem>
          </Link>
          <Link to="/">
          <DropdownItem onClick={()=>
        {
            value.logout()
        }}>SignOut</DropdownItem>
        </Link>
        </DropdownMenu>
      </Dropdown></div>
        }
    
         
        
<Link to="/store" className="ml-auto">
            
    
                <button  className="btn btn-primary" onClick={()=>value.getCart}> MyCart</button>
        
                </Link>
                
                
            
            
            
            
            
            
         
                </nav>)}
        </ProductConsumer>
        </div>
        )
    }

}
export default Navbar