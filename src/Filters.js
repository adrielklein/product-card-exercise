import React from 'react';
import './Filters.css';


const Filters = ({isGrouped, setIsGrouped, categoryNames, selectedCategory, setSelectedCategory}) => {
    const changeIsGrouped = (event) => {
        setIsGrouped(event.target.value === 'grouped')
    };

    const changeCategory = (event) => {
        setSelectedCategory(event.target.value)
    };

    return (
        <div className="Filters-row">
            <select value={selectedCategory} onChange={changeCategory}>
                <option value="All Products">All Products</option>
                {categoryNames.map(name=> <option value={name}>{name}</option>)}
            </select>
            {selectedCategory === 'All Products' && <select value={isGrouped ? 'grouped' : 'nonGrouped'} onChange={changeIsGrouped}>
                <option value="nonGrouped">Non Grouped</option>
                <option value="grouped">Grouped</option>
            </select>}
        </div>
    )
};

export default Filters;
