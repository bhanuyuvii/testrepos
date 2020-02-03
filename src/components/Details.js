import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import './Details.css';
//import {Link} from 'react-router-dom';
class Details extends Component{

    render()
    {
  return (
    <ProductConsumer>
{value=>{
const {title,icon,company,price}=value.details;
return <div className="container py-5 text-capitailze">
<div className="row">

<div className="col-10 mx-10 ol-md-6 my-3 text-center text-capitalize text-blue">
<h1> {title}</h1>
<div className="img-container p-3">
<img className="img-fluid" alt="product" src={icon}>
</img>
</div>
<div className="col mx-auto col-md-6 my-3 text-center text-bright">
<h2>{company}</h2>
</div>
<h4 >
  <strong>
    {price} $
    </strong> 
  </h4>
  
</div>

</div>

  </div>





}}



    </ProductConsumer>
  )

      
   

    }
}
export default Details