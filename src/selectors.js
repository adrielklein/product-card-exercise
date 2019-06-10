import _ from 'lodash';

const getCategoryToProductMap = _.memoize(products => {
    let result = {};
    products.forEach(product => {
        product.categories.forEach(category => {
            const categoryName = category.name;
            if (Object.keys(result).includes(categoryName)) {
                result[categoryName].push(product);
            } else {
                result[categoryName] = [product];
            }
        });
    });
    return result;
});


const getProducts = ({products, categoryName}) => {
    if (!categoryName || categoryName === 'All Products') return products;
    return getCategoryToProductMap(products)[categoryName];
};

const getCategoryNames = ({products}) => Object.keys(getCategoryToProductMap(products));


export {getProducts, getCategoryNames};