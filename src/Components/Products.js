import React from 'react';
import SingleItem from './SingleItem';

function Products({products}) {
  return (
  <div>
      {products.map((elt)=><SingleItem product={elt} key={elt.id}/>)}
  </div>
  )
}

export default Products