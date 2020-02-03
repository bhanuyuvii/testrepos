import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Payment from './components/Payment';
import {ProductConsumer} from '../src/context';
class App extends Component {

  

  render() {
   
    
    return (
      <React.Fragment>
        <Navbar />
        <ProductConsumer>
          {value=>
          {
//console.log(value.username);
let temp="";
if(value.username==="SignIn/SignUp")
temp=Login;
else
temp=Profile;
        return <Switch>
          <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/details" component={Details}/>
               <Route  exact path="/store" component={Cart} />
         <Route exact path="/products" component={ProductList} />

         <Route exact path="/profile" component={temp} />
               <Route exact path="/login" component={Login}/>
               <Route exact path="/signup"  component={Signup} />
             
               <Route  component={Default} />
                </Switch>
          }}
           </ProductConsumer>
      </React.Fragment>

    );
  }
}

export default App;
