import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import {signUpStart} from '../../redux/user/user.actions';
import { connect} from 'react-redux';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
     handleSubmit= async event=>{
         event.preventDefault();
         const {signUpStart} = this.props;
        const { displayName,email, password, confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
         signUpStart({ displayName, email,password});
     }

     handleChange=event=>{
         const { name, value} = event.target;
         this.setState({ [name]: value});
     }

    render(){
        const { displayName,email, password, confirmPassword}=this.state;
        return(
           <div className='sign-up'>
              <h2 className='title'>I do not have an account</h2>
              <span>Sign up with your email and password</span>
              <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                handleChange={this.handleChange}
                label='displayName'
                required
                />
                 <FormInput
                type='email'
                name='email'
                value={email}
                handleChange={this.handleChange}
                label='Email'
                required
                />
                 <FormInput
                type='password'
                name='password'
                value={password}
                handleChange={this.handleChange}
                label='password'
                required
                />
                 <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                handleChange={this.handleChange}
                label='confirmPassword'
                required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
              </form>
           </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
  signUpStart: userCredentials=>dispatch(signUpStart(userCredentials))
});
export default connect(null, mapDispatchToProps)(SignUp);