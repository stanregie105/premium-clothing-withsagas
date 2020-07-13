import React,{ Component}  from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth} from './firebase/firebase.utils';
//import CardList from './card';



class App extends Component{
 constructor(props){
   super(props);
   this.state={
     currentUser: null
   }
 }
 unsubscribeFromAuth = null;

 componentDidMount(){
  this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
     this.setState({ currentUser: user});
     console.log(user);
   })
   
 }
 componentWillUnmount(){
   this.unsubsrcibeFromAuth();
 }

  render(){ 
    return (

      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
         <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
     );

  }
}


export default App;
