import React, {useState} from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

const SignIn=({emailSignInStart},{googleSignInStart})=>{
  const [userCredentials, setCredentials] = useState({ email:'', password:''});
   
  const { email, password} = userCredentials;

   const handleSubmit= async event=>{
      event.preventDefault();
      emailSignInStart(email, password);
    }

   const handleChange=(event)=>{

      const { name, value} = event.target;
      setCredentials({...userCredentials, [name]:value});
    }
    
        return(
           <div className="sign-in">  
             <h2>I already have an acount</h2>
             <span>Sign in with your email and password</span>
             <form onSubmit={this.handleSubmit}>
                 <FormInput 
                 name='email' 
                 type='email' 
                 value={email}
                 handleChange={this.handleChange}
                 label='email' 
                 required/>
                 
                 <FormInput 
                 name='password' 
                 type='password' 
                 value={password}
                 handleChange={this.handleChange}
                 label='password'
                  required/>
                 <div className='button'>
                 <CustomButton type='submit'>Sign in</CustomButton>
                 <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>{' '}Sign in Google{' '}</CustomButton>
                 </div>
             </form>
           </div> 
        )
    }


const mapDispatchToProps = dispatch=>({
    googleSignInStart: ()=>dispatch(googleSignInStart()),
    emailSignInStart: (email, password)=> 
    dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);