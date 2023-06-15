import TemplateDefault from './TemplateDefault';
import Template1 from './Template1';


const routerCircleMotion = [
    {
        path: '/circular-motion',
        element: <TemplateDefault />,
    },
    {
        path: '/circular-motion/template1',
        element: <Template1 />,
    }
]

export default routerCircleMotion;