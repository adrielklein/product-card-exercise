import React, {useState, useEffect} from 'react';
import './App.css';
import Products from './Products';
import GroupedProducts from './GroupedProducts';
import Filters from './Filters';
import axios from 'axios';
import {getCategoryNames, getProducts} from "./selectors";

const Body = ({products, isGrouped, setIsGrouped, selectedCategory, setSelectedCategory}) => {
    const categoryNames = getCategoryNames({products});
    const selectedProducts = getProducts({products, categoryName: selectedCategory});
    return <>
        <div className="App-row">
            <Filters isGrouped={isGrouped} setIsGrouped={setIsGrouped} categoryNames={categoryNames}
                     selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>
        <div className="App-row">
            {isGrouped ? <GroupedProducts categoryNames={categoryNames} products={products}/> :
                <Products products={selectedProducts} isGrouped={isGrouped}/>}
        </div>
    </>
};

const App = () => {
    const [products, setProducts] = useState();
    const [isGrouped, setIsGrouped] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('/products');
            setProducts(result.data);
        }

        fetchData();

    }, []);

    return <div className="app">
        <h1>Products</h1>
        {products ?
            <Body products={products} isGrouped={isGrouped} setIsGrouped={setIsGrouped}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}/> : 'Loading products...'}
    </div>
};

export default App;
