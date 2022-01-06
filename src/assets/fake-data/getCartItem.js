import accessoryData from './accessories'
import categoryAccess from './category-access';
import productData from './products'
const checkSlug = slug => {
    for (let index = 0; index < categoryAccess.length; index++) {
        if(slug.includes(categoryAccess[index].categorySlug)) return true;
    }
    return false;
}
const getCartItemsDetail = (cartItems) => {
    let res = [];
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            res.push({
                ...e,
                product: checkSlug(e.slug) ? accessoryData.getAccessoryBySlug(e.slug) : productData.getProductBySlug(e.slug)
            })
        });
    }
    return res;
}
export {checkSlug};
export default getCartItemsDetail