import { useEffect } from 'react';

import Colors from '../../utils/Colors';
import CircleMotion from '../../utils/CircleMotion';

/*
TODO:
- convert to 3D
- add mouse interaction
*/

const TemplateDefault = () => {
    // init objects
    const colors = new Colors();
    const circleArray: CircleMotion[] = [];

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

        // create circles

        function init() {
            for (let i = 0; i < 40; i++) {
                // distance from center
                const distance = 150 + Math.random() * 50;

                const corner = Math.random() * 2 * Math.PI;
                const x = Ix + distance * Math.cos(corner);
                const y = Iy + distance + Math.sin(corner);
                const radius = Math.random() * 3 + 1;
                const color = colors.getRandomColor();
                const deltaCorner = Math.random() * 0.01 + 0.01;

                circleArray.push(new CircleMotion({ Ix, Iy, distance, corner, x, y, deltaCorner, radius, color, c }));
            }
        }

        // animation
        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = 'rgba(255, 255, 255, 0.05)';
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

export default TemplateDefault;
