import React,{Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import './ProductList.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Input} from 'reactstrap';

class ProductList extends Component{
    constructor(props)
    {
        super(props);

this.state={
textSearch:"",
modal:false,
typeofalcohol:"Whisky",
typeofbeer:"Both",
pricemin:200,
pricemax:1000,
useFilter:false
};
this.toggle = this.toggle.bind(this);
this.handleAlcoholChange=this.handleAlcoholChange.bind(this);
this.saveChanges=this.saveChanges.bind(this);
this.handleBeerChange=this.handleBeerChange.bind(this);
this.saveMinPrice=this.saveMinPrice.bind(this);
this.saveMaxPrice=this.saveMaxPrice.bind(this);
    
    }
changeText=(event)=>
{
this.setState({
    textSearch:event.target.value
})
}   
toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleAlcoholChange=event=>
  {
    this.setState({
      typeofalcohol:event.target.value
    })
   // console.log(this.state.typeofalcohol);

  }
  handleBeerChange=(event)=>
  {

this.setState({
  typeofbeer:event.target.value
})

  }
  
  saveChanges()
    {
    
  if(this.state.pricemin==" " || this.state.pricemax==" ")
  alert("Required fields cannot be Blank")
  else
  {
    //console.log("Hello");
    this.toggle();
    this.setState({
      useFilter:true
    })

  }
  }
  saveMinPrice=(event)=>
  {
if(event.target.value<=0)
alert("Minimum cannot be 0 or less than 0");
else{
    this.setState({
      pricemin:event.target.value
    }
    )
  }
  }
  saveMaxPrice=(event)=>
  {
    if(event.target.value>=5000)
    alert("Maximum Limit Exceeded")
    else
    {

    this.setState({
      pricemax:event.target.value
    })
  }
  }


    

    
   

    render()
    {

       //console.log(this.state.products);
        return (
            <div>

                <div className="container py-10" >
                <Button className="filterbutton" onClick={this.toggle}>Filters</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Filters</ModalHeader>
          <ModalBody>
            <Label for="typeofalcohol">Type of Alcohol</Label>
            <Input type="select" value={this.state.typeofalcohol} onChange={this.handleAlcoholChange} >
            <option value="Beer">Beer</option>
            <option value="Whisky">Whisky</option>
<option value="Rum">Rum</option>
<option value="Scotch">Scotch</option>
            </Input>
          {this.state.typeofalcohol=="Beer"?<div>
            <Label>Type of Beer</Label>
          <Input type="select" value={this.state.typeofbeer} onChange={this.handleBeerChange} >
            <option value="Can">Can</option>
            <option value="Bottle">Bottle</option>
            <option value="Both">Both</option>
            </Input>


          </div>:<div></div>}
          <Label>Select Min Price *</Label>
<Input type="text" value={this.state.pricemin} onChange={this.saveMinPrice}>
</Input>
<Label>Select Max Price *</Label>
<Input type="text" value={this.state.pricemax} onChange={this.saveMaxPrice}>
</Input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveChanges}>Save Changes</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
     

<input type="text" value={this.state.testSearch} className="searchbox" placeholder="Search by Name"  onChange={this.changeText}/>
               <div className="row">
               
            
               <ProductConsumer>
                   {
                       
                       value=>{
                           return (value.products.map(product=>
                            
                            {
                            var temp="";
                            temp=product.title;
                             if(this.state.textSearch!=="" && temp.search(this.state.textSearch)!==-1)
                                return <Product key={product.id} product={product} />
                               
                            else
                                if(this.state.textSearch==="" && this.state.useFilter==true)
                                {
                                  
                                  
                                 if(this.state.typeofalcohol!=="Beer")
{
  if(product.typeofalcohol!=="Beer" && product.price>=this.state.pricemin && product.price<=this.state.pricemax)
  return <Product key={product.id} product={product} /> 
}
  else
  if(this.state.typeofalcohol==="Beer")
  {
    if(this.state.typeofbeer!=="Both")
    {
if(this.state.typeofbeer===product.type && product.price>=this.state.pricemin && product.price<=this.state.pricemax)
return <Product key={product.id} product={product}/>
    }
else
{
if(this.state.typeofbeer==="Both")
if(product.price>=this.state.pricemin && product.price<=this.state.pricemax && product.typeofalcohol=="Beer")
return <Product key={product.id} product={product}/>
}
  }
}//

                                else if(this.state.textSearch==="" && this.state.useFilter===false)
                                return <Product key={product.id} product={product} />
                                
                                                            }
                               

                           ));
                       }
                   }
               
                  
                   </ProductConsumer>
             
                </div>
                </div>


            </div>
        )
    }
}
export default ProductList