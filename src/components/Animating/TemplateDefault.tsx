import Circle from '../../utils/Circle';
import Colors from '../../utils/Colors';

// hooks
import { useEffect } from 'react';

export default function TypeDefault() {

    // variables
    const colors = new Colors();
    const circleArray: Circle[] = [];

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
            for (let i = 0; i < 800; i++) {
                const radius = Math.random() * 3 + 1;
                const x = Math.random() * (window.innerWidth - radius * 2) + radius;
                const y = Math.random() * (window.innerHeight - radius * 2) + radius;
                const dx = Math.random() - 0.5;
                const dy = Math.random() - 0.5;
                const color = colors.getRandomColor();
                circleArray.push(
                    new Circle({ x, y, dx, dy, r: radius, color, c, w: window.innerWidth, h: window.innerHeight }),
                );
            }
        }

        // animation
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].updateFill();
            }
        }

        // start
        init();
        animate();

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
