import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import Total from '../components/Total';
var res=0;
class CartItem extends Component
{
    constructor(props)
    {
        //console.log("Constructor is fired");
        super(props);
        this.state={
            id:props.product.id,
            title:props.product.title,
            quantity:props.product.quantity,
            count:props.product.count,
            type:props.product.type,
            price:props.product.price

  
    }

    
    
     }
    
   
render()
{
    
   
  /// console.log("Render is fired");
    return (
        <div>
        <ProductConsumer>
{
    value=>{
        //console.log(value.cart)
    
    return <div className="container mx-auto py-2">
    <div className="row">
    <div className="col-2">
    <button className="btn btn-outline-primary" disabled={this.state.count===0?true:false}
     onClick={()=>
    {
        value.removefromCart(this.state.id);
        
        this.setState(prevState=>({
            count:prevState.count-1
           
    
    
        }))
    }}>
    -
    </button>
    </div>
<div className="col-3">
{this.state.title} {this.state.type} ({this.state.quantity} mL)
</div>
<div className="col-1"> </div>
<button className="btn btn-outline-primary" onClick={()=>
{
    value.addtoCart(this.state.id);
      //  console.log(value.cart);
    this.setState(prevState=>({
        count:prevState.count+1

    }))
}}> 
    +
    </button>
    
    <div className="col-1">
    {this.state.count} 
    </div>
    <div className="col-0.5">
    X
    </div>
<div className="col-1">
{this.state.price} 
</div>
<div className="col-1">
=
</div>
<div className="col-1">
{this.state.price*this.state.count}
</div>
{
    
}

    </div>
    </div> 
      

}

}
    </ProductConsumer>
    
    </div>
   

)    

}


}
export default CartItem