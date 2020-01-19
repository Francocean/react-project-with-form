import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import MyComment from './comment';


export default class ProductList extends Component {
  
  render() {
   
    return (
   <React.Fragment>
     <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(value)=>{
               return value.products.map( product =>{
                  return <Product key={product.id} product={product} />
               })
              }}
            </ProductConsumer>
            {/* <MyComment />  This is a component for comment section in our e-commerce app. You can uncomment this and run npm run build, then npm start to start the dev server*/}
          </div>
        </div>
     </div>
   </React.Fragment>
    )
  }
}
