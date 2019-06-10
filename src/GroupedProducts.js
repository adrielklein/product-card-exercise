import React from 'react';
import './Products.css';
import {getProducts} from "./selectors";
import Products from "./Products";

const GroupedProducts = ({categoryNames, products}) => {
    return categoryNames.map(categoryName => {
        const productsByCategoryName = getProducts({products, categoryName});
        const numItems = productsByCategoryName.length;
        const suffix = numItems === 1 ? 'item' : 'items';
        return <div key={categoryName}><h1>{`${categoryName} (${numItems} ${suffix})`}</h1><Products
            products={productsByCategoryName}/></div>
    });
};

export default GroupedProducts;
