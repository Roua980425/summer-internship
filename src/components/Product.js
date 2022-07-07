import React from 'react';

export default function Product(item) {
  const { product } = item;
  return (
    <div className="row">
                    {
                        product!==null &&
                        product?.results.map((item,i)=>(
                          <div key={i} className="card">
                          <a href={`/product/${product.id}`}>
                            <img className="medium" src={product.image} alt={product.name} />
                          </a>
                          <div className="card-body">
                            <a href={`/product/${product.id}`}>
                              <h2>{product.name}</h2>
                            </a>
                            <div className="price">${product.price}</div>
                          </div>
                        </div>
                        ))
                    }
                    </div>

  );
}