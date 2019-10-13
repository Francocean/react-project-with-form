import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../oceanLogolatest.png';
import styled from 'styled-components' 
import { ButtonContainer } from './ButtonStyle'
export default class Navbar extends Component{
    render(){
        return(
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk 
                    we just wrote the link to this logo here because it is not our own logo, but we downloaded it from
                     the site written above, and they want us to indicate that in our project.*/}
                <Link to='/'>
                    <img src={logo} alt='navbar-brand'  className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-items ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li> 
                </ul>
                <Link to="/signup" className="nav-link">
                    Sign up
                </Link>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer><span className="mr-2"><i className="fas fa-cart-plus"></i></span> cart</ButtonContainer>
                </Link>
           </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: crimson;
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
