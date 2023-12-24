import { Route } from "react-router-dom";

export const getRoutes = (routes: any, type?: any) => {
    return routes && routes?.length > 0 && routes.map((route: any, index: number) => {
        const { path, id, component } = route
        return <Route key={id} path={path} element={component} />
    })
};
