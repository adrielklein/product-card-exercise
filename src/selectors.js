
const getProducts = ({products, categoryName}) => {
    if (!categoryName || categoryName==='All Products') return products;
    return products.filter(product => {
        let isProductInCategory = false;
        product.categories.forEach(category => {
            if (category.name === categoryName) {
                isProductInCategory = true;
            }
        });
        return isProductInCategory;
    })
};

const getCategoryNames = ({products}) => {
        const categoryNames = {};
        products.forEach(product => {
            product.categories.forEach(category => {
                categoryNames[category.name] = true;
            });
        });
        return Object.keys(categoryNames);
    }
;



export {getProducts, getCategoryNames};