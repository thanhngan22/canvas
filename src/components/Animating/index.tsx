import TemplateDefault from './TemplateDefault'
import Template1 from './Template1';

const routerAnimating = [
    {
        path: '/animating',
        element: <TemplateDefault />,
    },
    {
        path: '/animating/template1',
        element: <Template1 />,
    }
]

export default routerAnimating;