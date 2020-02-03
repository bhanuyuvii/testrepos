import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import CartItem from  './CartItem';
import Total from './Total';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Input} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {Route,Link} from 'react-router-dom';

class Cart extends Component{
    

    constructor(props)
    {
        super(props);
        this.state=({
            tempCart:[],
            modal:false,
            payment:"netbanking",
            bill:0,
            dropdownOpen: false,
            
            selectedcard:"",
            iscardselected:false,
            cardnumber:""

            
        })
        this.toggle=this.toggle.bind(this);
        this.radiochange=this.radiochange.bind(this);
    this.toggleradio=this.toggleradio.bind(this);
    this.cardradiochange=this.cardradiochange.bind(this);
    this.selectcard=this.selectcard.bind(this);
    this.addnewcard=this.addnewcard.bind(this);
    
     
        }
        toggleradio()
        {
            this.setState(prevState => ({
                dropdownOpen: !prevState.dropdownOpen
              }));

        }
        toggle()
        {
            this.setState(prevState => ({
                modal: !prevState.modal
              }));
        }
        selectcard=(event)=>
        {
            this.setState({
                selectedcard:event.target.value,
                cardtype:"addnew",
                dropdownOpen:false
            })
            this.toggleradio();
            console.log(this.state.selectedcard);
        }
        addnewcard=(event)=>
        {
            this.setState({
                cardnumber:event.target.value
            })
        }
        radiochange=(event)=>
        {
            
            this.setState({
                [event.target.name]:event.target.value
            })
           }
           cardradiochange=(event)=>
           {
               this.setState({
                   [event.target.name]:event.target.value
               })
           }
        
      
    render()
    {
        var total=0;
    // console.log("Render is called");  

        const {img}="public/icons/emptycart.png"
        return(
   <div>
       <ProductConsumer>
          {value=>{
              
              
              const tempCart=value.cart;
              total=0;
              //console.log("A is called");
              tempCart.map(item=>
                {
                
                    total+=(item.count)*(item.price);
                    //console.log(item.count*item.price);
                })
               

              
              if(value.cart.length===0)
              {
                  return (
                  <div className="container py-5">
                  <h1 className="text-capitalize text-center">
                      Your Cart is Empty</h1>
                      
                      </div>
                      )
                      
              }
              return (value.cart.map(item=>
                {
                   
                    return <CartItem key={item.id} product={item} />
                    
                    
                }
                )
                
                )
               
                

              
            
            
            
               
    
                 
           
            } 
            
            

        }
        
        

          
       </ProductConsumer>
       <ProductConsumer>
          {value=>
        {
//            console.log(value.cart);
return <Button disabled={value.cart.length===0} onClick={()=>
    {
    
        
    if(value.username==="SignIn/SignUp")
    alert("You need to SignIn First");
    else
    
        this.toggle();
  
    
    
    }


}>CheckOut</Button>



        }}

       </ProductConsumer>
       <Modal isOpen={this.state.modal} toggle={this.toggle}>
   <ModalHeader toggle={this.toggle}>Payment</ModalHeader>
<ModalBody>
    <ProductConsumer>
        {value=>
        {
           return <Link to="/home"><Button onClick={value.addtoCurrentUserOrders
        }>CheckOut</Button> </Link>
        }
    }
    </ProductConsumer>
    <Label>Select Payment Type</Label><br/>
<Label>TotalBill=1000></Label><br/>
<Label>
<input type="radio"  
value="netbanking" 
name="payment"
checked={this.state.payment==="netbanking"}
onChange={this.radiochange}/>
NetBanking
</Label><br/>
<Label>
    <input type="radio" 
    value="credit/debit"
    name="payment"
    checked={this.state.payment==="credit/debit"}
    onChange={this.radiochange} />
Credit/DebitCard
</Label><br />
<Label>
    {this.state.payment==="credit/debit"? <div>
        
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleradio}>
        <DropdownToggle caret>
          Select Saved Cards
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.selectcard} value="1234123412341234">1234123412341234</DropdownItem>
          <DropdownItem onClick={this.selectcard} value="2345234523452345">2345234523452345</DropdownItem>
          
          </DropdownMenu>
      </Dropdown>
      
        <Label>
       Enter Card number 

    </Label>
    <input type="text" onChange={this.addnewcard} placeholder="Enter 16digit card number" value={this.state.selectedcard}></input><br/>
    <Label>Enter 3 digit CVV</Label>
    <input type="text" placeholder="XXX" /><br/>
    <Label>Enter Name on Card</Label>
    <input type="text" placeholder="abcxyz" />
    <Label>
    <input type="checkbox"></input>Save this card</Label>
         </div>

    :<div></div>}
<input type="radio" 
    value="cod"
    name="payment"
    checked={this.state.payment==="cod"}
    onChange={this.radiochange} />
CashonDelivery

</Label>
</ModalBody>

   </Modal>

       
   </div>
               
            
            )
    }
}
export default Cart