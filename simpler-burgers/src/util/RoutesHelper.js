export const routes = {
    home: '/',
    product: '/product',
    homeWithCart: '/withCart',
    cart: '/cart',
    editProduct: '/editProduct'
}

const createRouteWithoutParam = (pathName) => (history) =>
    history.push({
        pathname: pathName,
    })


export const routeTo = {
    home: createRouteWithoutParam(routes.home),
    product: createRouteWithoutParam(routes.product),
    homeWithCart: createRouteWithoutParam(routes.homeWithCart),
    cart: createRouteWithoutParam(routes.cart),
    editProduct: createRouteWithoutParam(routes.editProduct)
}