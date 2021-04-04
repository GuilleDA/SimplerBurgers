export const routes = {
    home: '/',
}

const createRouteWithoutParam = (pathName) => (history) =>
    history.push({
        pathname: pathName,
    })


export const routeTo = {
    home: createRouteWithoutParam(routes.home)
}