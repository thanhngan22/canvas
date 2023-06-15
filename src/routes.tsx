import Layout from "./layout";
import TemplateDefault from "./components/Animating/TemplateDefault";

import routerAnimating from "./components/Animating";
import routerCircleMotion from "./components/Circular.Motion";


const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "/", element: <TemplateDefault /> },
            ...routerAnimating,
            ...routerCircleMotion
        ]
      
    },
    {
        path: "*",
        element: <Layout />
    }
]

export default routes;