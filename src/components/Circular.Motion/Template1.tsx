import { useEffect } from 'react';

import Colors from '../../utils/Colors';
import Circle from '../../utils/Circle';

const Template1 = () => {
    // init objects
    const colors = new Colors();
    const circleArray: Circle[] = [];

    useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const c = canvas.getContext('2d') as CanvasRenderingContext2D;
        // console.log("canvas: ", canvas)
        // console.log("c: ", c)

        // set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // center of circles
        const Ix = canvas.width / 2;
        const Iy = canvas.height / 2;
        // console.log("Ix: ", Ix)
        // console.log("Iy: ", Iy)

        // distance from center
        const distance = 100;

        // create circles

        function init () {
            for (let i = 0; i < 20; i++) {
                const corner = Math.random() * 2 * Math.PI;
                const x = Ix + distance * Math.cos(corner);
                const y = Iy + distance + Math.sin(corner);
                const dx = Math.random() - 0.5;
                const dy = Math.random() - 0.5;
                const radius = Math.random() * 3 + 1;
                const color = colors.getRandomColor();
    
                circleArray.push(new Circle({ x, y, dx, dy, r: radius, color, c, w: canvas.width, h: canvas.height }));
            }
        }

        // animation
        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = "rgba(255, 255, 255, 0.05)";
            c.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < circleArray.length; i++) {
                // console.log(`circleArray[${i}]: `, circleArray[i])
                circleArray[i].updateFill();
            }
        }

        // start
        init();
        animate();

        return () => {
            // cleanup
            c.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);

    return <canvas id="canvas" className="w-full h-full" />;
};

export default Template1;
