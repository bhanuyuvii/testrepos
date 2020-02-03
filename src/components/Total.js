import React,{Component} from 'react';
import {ProductConsumer} from '../context';

 class Total extends Component
{
    constructor(props)
    {
        super(props);
   //  tempCart=[];
    }
    
    getTotal()
    {
       // alert("Calculating Total");
     //   console.log(this.state.tempCart);
    }

    

render()
{
   
    return (
        <div>
        <ProductConsumer>
            {value=>
            {    
            
                }}

        </ProductConsumer>
        {this.getTotal()}
    
    </div>
    )
}
}

export default Total