import React, {useState, useEffect} from 'react';
import './App.css';
import Products from './Products';
import Filters from './Filters';
import axios from 'axios';

const Body = ({products}) => {
    return <>
        <div className="App-row">
            <Filters/>
        </div>
        <div className="App-row">
            <Products products={products}/>
        </div>
    </>
};

const App = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('/products');
            setProducts(result.data);
        }

        fetchData();

    }, []);

    return <div className="app">
        <h1>Products</h1>
        {products ? <Body products={products}/> : 'Loading products...'}
    </div>
};

export default App;
