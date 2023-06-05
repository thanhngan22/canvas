import Layout from "./layout";
import TemplateDefault from "./components/Animating/TemplateDefault";

import routerAnimating from "./components/Animating";


const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "/", element: <TemplateDefault /> },
            ...routerAnimating,
        ]
      
    },
    {
        path: "*",
        element: <Layout />
    }
]

export default routes;