import React from 'react';
import './header.styles.scss';
import { connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {ReactComponent as Logo } from '../../assets/4.4 crown.svg.svg';
import { auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {signOutStart} from '../../redux/user/user.actions'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header =({ currentUser, hidden,signOutStart})=>(
    <HeaderContainer>
     <LogoContainer to="/">
     <Logo className="logo"/>
     </LogoContainer>
     <OptionsContainer>
         <OptionLink to='/shop'>
         SHOP
         </OptionLink>
         <OptionLink to='/signin'>
         CONTACT
         </OptionLink>
         {
             currentUser?
             <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>:
             <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
         }
         <CartIcon/>
     </OptionsContainer>
     {hidden? null:<CartDropdown/>}
    </HeaderContainer>
);

const mapStateToProps=createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

const mapDispatchToProps = dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);