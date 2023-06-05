import Layout from "./layout";

import routerAnimating from "./components/Animating";


const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            ...routerAnimating,
        ]
      
    },
    {
        path: "*",
        element: <Layout />
    }
]

export default routes;