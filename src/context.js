import React,{Component} from 'react';
import {storeProducts,storeDetails,userDetails} from './data';
import { METHODS } from 'http';
import { get } from 'mongoose';
import { getCiphers, timingSafeEqual } from 'crypto';
import { resolve } from 'q';
const ProductContext=React.createContext();
 class ProductProvider extends Component
{
    constructor(props)
    {
        super(props);
    this.state=({
        products:[],
        users:[],
        details:storeDetails,
        cart:[],
        username:"SignIn/SignUp",
        currentUserAddress:[],
        currentUserOrders:[],
        testItem:[],
        tempVariable:0,
        tempUsers:[],tempPassword:""
    })
this.addtoCurrentUserOrders=this.addtoCurrentUserOrders.bind(this);
this.refreshCart=this.refreshCart.bind(this);
this.setTempItems=this.setTempItems.bind(this);
//this.getPass=this.getPass.bind(this);
}
    async componentDidMount()
    {
        //console.log("running in back");
        
        this.setProducts();
        this.setUsers();
       
      const products=await fetch("http://localhost:4000/store/data");
        const result=await products.json();
        this.setState({
            testItem:result
        })
    
   
        const users=await fetch("http://localhost:4000/login/users");
        const result2=await users.json();
        this.setState({
            tempUsers:result2
        })
}
        //this.setTempItems();
        

     //  this.setUserName();
    
    
  
 // console.log(temp[0].password);
        
    

    setTempItems=()=>
    {
       
        //onst proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch("http://localhost:4000/store/data").then(res=>res.json()).then((result=>
        {
            console.log("function called");
            //console.log(result);
            this.setState({
                testItem:result
            })
           // console.log(this.testItem);
        }))
            
        
    }
    
    setUsers=()=>
    {
        let tempUsers=[];
        userDetails.forEach(item=>
            {
                const singleuser={...item};
                tempUsers=[...tempUsers,singleuser];
            })
            this.setState(()=>{
                return {users:tempUsers};
            })
    }
    refreshCart()
    {
        let temp=this.state.products;
        temp.map(item=>
            {
                item.inCart=false;
                item.count=0;
                
            })
            this.setState(()=>
            {
                return {
                    cart:[],products:temp};
            })
    }

    
setUserAddress=(temp)=>
{
    this.setState({
        currentUserAddress:temp
    })
}
    setProducts=()=>
    {
        let tempProducts=[];
        storeProducts.forEach(item=>
            {
                const singleItem={...item};
                tempProducts=[...tempProducts,singleItem];

            }
            ) 
            this.setState(()=>
            {
                return {products:tempProducts};
            })
    }
    addtoCurrentUserOrders()
        {
            //console.log(this.state.username);
  let temp=userDetails.find(item=>item.username===this.state.username);
  let res=[];
  res=temp.orders;
  res.push(this.state.cart);
  this.setState({
      currentUserOrders:res
  })
  //console.log(this.state.cart);
  this.refreshCart();
  //console.log("Final cart=");
  //console.log(this.state.cart);
  //console.log(this.state.cart);
  //console.log(temp);
            //let temp=currentUserOrders;
//users.find(item=>item.username===this.state.username);
//console.log(temp);
    }
    getItem=(id)=>
    {
        const product=this.state.products.find(item=>item.id===id)
        return product;
    }
   
 setUserName=(value)=>
 {
this.setState({
    username:value
})

//c//onsole.log(this.state.username); 
}
logout=()=>
{
    this.setState({
        username:"SignIn/SignUp"
    })
}
    
    
    handleDetail=(id)=>
    {
const product=this.getItem(id);
this.setState(()=>{
    return {details:product}
})    
}
    addtoCart=(id)=>
    {
        
        const tempProducts=[...this.state.products];
        const index=tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.count=product.count+1;
        product.inCart=true;
        tempProducts[index]=product;
        const index2=this.state.cart.indexOf(this.getItem(id));
        if(index2!=-1)
        this.state.cart[index2]=product;
        else
        if(index2==-1)
        this.state.cart.push(product);
       // console.log(this.state.cart);
        this.setState(()=>
        {
            return {

                products:tempProducts,
                cart:this.state.cart
            }
        })
}
    
    removefromCart=(id)=>
    {
      const tempProducts=[...this.state.products];
      const index=tempProducts.indexOf(this.getItem(id));
      const product=tempProducts[index];
     var index2=0;
      
      if(product.count>1)
      {
       product.count=product.count-1;
       
       index2=this.state.cart.indexOf(this.getItem(id));
   this.state.cart[index2]=product;
    }
    else
    if(product.count===1)
    {
        product.count=0;
        product.inCart=false;
        index2=this.state.cart.indexOf(this.getItem(id));
   
        this.state.cart.splice(index2,1);
    }
    tempProducts[index]=product;
   // console.log(this.state.cart);
    this.setState(()=>
    {
        return {
            products:tempProducts,
            cart:this.state.cart
        }
    })
}

    
    getCart()
    {
        const temp=this.products.find(item=>item.inCart===true)
        const arr=[];
    arr.push(temp);
        
        this.setState(()=>
        {
            return {details:arr};
        })
    }
    getPassword(username)
    {
        const temp=this.users.find(item=>item.username==username);
        if(temp!=null)
        return temp.password;
    else
    return null;
    }
    getDetails()
    {
    const temp=this.users.find(item=>item.username==this.state.username);
   if(temp!=null)
   return temp;
}
    
    render()
    {
        return(
        <ProductContext.Provider  value={{
...this.state,handleDetail:this.handleDetail,addtoCart:this.addtoCart,getCart:this.getCart,removefromCart:this.removefromCart,username:this.state.username,setUserName:this.setUserName,logout:this.logout,
getPassword:this.getPassword,getDetails:this.getDetails,setUserAddress:this.setUserAddress,
addtoCurrentUserOrders:this.addtoCurrentUserOrders,refreshCart:this.refreshCart,testItem:this.state.testItem,tempVariable:this.state.tempVariable,setTempItems:this.setTempItems,tempUsers:this.state.tempUsers,
tempPassword:this.state.tempPassword
        }}>
        {this.props.children}
        
        </ProductContext.Provider>
        )

    }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer}; 