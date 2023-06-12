import TemplateDefault from './TemplateDefault'
import Template1 from './Template1';
import Template2 from './Template2';

const routerAnimating = [
    {
        path: '/animating',
        element: <TemplateDefault />,
    },
    {
        path: '/animating/template1',
        element: <Template1 />,
    },
    {
        path: '/animating/template2',
        element: <Template2 />,
    }
]

export default routerAnimating;