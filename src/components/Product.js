import React,{Component} from 'react';
//import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import './Product.css';
//import Details from './Details';
class Product extends Component{

    render()
    {
        //console.log(this.props.product);
        const {id,title,icon,price,inCart,type}=this.props.product;
        return (

        <div className="col-9 mx-auto col-md-6 col-lg-3 my-2 ">
        <div className="card">
<ProductConsumer>
    {value=>(<div className="img-container p-5" onClick={()=>{value.handleDetail(id)}}>
        <Link to="/details">
        <img src={icon} alt="product" className="card-img-top" width="200" height="200" >
        </img>
        </Link>
        <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{value.addtoCart(id)}}>
{inCart?(
<p className="text-capitalize mb-0 disabled">
  InCart
    </p>
):(
    <p className="auto-capitalize mb-0">
    Add to Cart
        </p>
)}
</button>


        </div>)}
          
        </ProductConsumer>
<div className="card-footer d-flex justify-content-between text-muted">
<p className="text-captalize  mb-0">
{title} {type}
</p>
<h5 className="text-capitalize  mr-0">
 {price}
 <span className="ml-0">
/-
</span>

    </h5>
</div>
        </div>
    
        </div>
       
)

}

}
//const ProductWrapper=styled.div 

export default Product
