import React from 'react';
import Product from '../Product/Product';
import data from '../../products.json';

const Main = () => {


    return (
        <div className="main">
            <div className="products">
                {
                    data.map((product) => <Product product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default Main;