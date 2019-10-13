import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';


export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
       <div className="card">
        <ProductConsumer>
          {(value) => {
            return(
              <div className='img-container p-5' onClick={() => value.handleDetail(id)}>
                  <Link to='/details'>
                      <img src={img} alt='product' className="card-img-top" />
                  </Link>
                  <button className='cart-btn' disabled={inCart? true : false} 
                    onClick={() => {value.addToCart(id);
                      value.openModal(id);
                    }}>
                    {inCart?(<p className='text-capitalize mb-0' disabled>in cart</p>): <i className='fas fa-cart-plus'></i>}
                  </button>
              </div>
            )
          }}
        </ProductConsumer>
            {/* card footer */}
            <div className='card-footer d-flex justify-content-between'>
                <p className='align-self-center mb-0'>
                    {title}
                </p>
                <h5 className='text-blue font-italic mb-0'>
                    <span className='mr-1'>$</span>
                    {price}
                </h5>
            </div>
       </div>
      </ProductWrapper>
    )
  }
}
//Now this code below is used to check to cause our console to alert use if the type of the property's value in our data.js
//is mistakenly changed or messed up
Product.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
};


//Here we write our styled component for a div.
const ProductWrapper = styled.div`
  .card{
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  &:hover{
   .card{
     border: 0.04rem solid rgba(0, 0, 0, 0.2);
     box-shadow: 1px 3px 0px rgba(0, 0, 0, 0.2);
   }
   .card-footer{
     background: rgba(247, 247, 247, 1);
   }
  }
  .img-container{
    position: relative;
    overflow:hidden;
  }
  .card-img-top{
    transition: all 0.3s linear; //this transition is what makes 
    //the enlarging of the image to be smooth at our set time interval.
  }
  .img-container:hover .card-img-top{
   transform: scale(1.2); //this scale means how big you want the card image to get when we hover over the image container.
  }
  .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: crimson;
    border: none;
    color: var(--mainWhite); //the var means that the color we want to access is our own created custom css style in App.css
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
  }
  .img-container:hover .cart-btn{
    transform: translate(0, 0); //this causes the cart-btn to appear as we hover on the image container.
  }
  .cart-btn:hover{
    color: var(--mainBlue);
    background: lightgrey
    cursor: pointer;
  }
  .cart-btn:focus{
    outline-style: none;
  }
`;
