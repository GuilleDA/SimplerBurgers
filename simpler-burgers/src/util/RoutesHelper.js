export const routes = {
    home: '/',
    product: '/product'
}

const createRouteWithoutParam = (pathName) => (history) =>
    history.push({
        pathname: pathName,
    })


export const routeTo = {
    home: createRouteWithoutParam(routes.home),
    product: createRouteWithoutParam(routes.product)
}