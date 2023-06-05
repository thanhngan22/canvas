import Circle from '../../modules/Circle';
import Colors from '../../modules/Colors';

// hooks
import { useEffect } from 'react';

export default function Template1() {
// add dat gui ........................................................................................................

    const mouse = {
        x: 0,
        y: 0,
    };

    // variables
    const colors = new Colors();
    const circleArray: Circle[] = [];
    const maxRadius = 40;
    const minRadius = 2;

    useEffect(() => {
        // canvas
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        // console.log("canvas: ", canvas)
        const c = canvas.getContext('2d') as CanvasRenderingContext2D;

        // canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // functions
        function init() {
            circleArray.length = 0;
            for (let i = 0; i < 1; i++) {

                const radius = Math.random() * 3 + 30;
                const x = Math.random() * (window.innerWidth - radius * 2) + radius;
                const y = Math.random() * (window.innerHeight - radius * 2) + radius;
                const dx = Math.random() - 0.5 * 10;
                const dy = Math.random() - 0.5 * 10;
                const color = colors.getRandomColor();
                circleArray.push(
                    new Circle({ x, y, dx, dy, r: radius, color, c, w: window.innerWidth, h: window.innerHeight }),
                );
            }
        }

        // animation
        function animate() {
            requestAnimationFrame(animate);

            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].updateStroke();
            }
        }

        // event listeners
        window.addEventListener('mousemove', event => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });


        // start
        // clear canvas

        init();
        animate();

        console.log('array length: ', circleArray.length);

        return () => {
            // cleanup
            c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        };
    }, []);

    window.addEventListener('resize', () => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].w = window.innerWidth;
            circleArray[i].h = window.innerHeight;
        }
    });

    return <canvas id="canvas" className="w-full h-full" />;
}
