import Circle from '../../utils/Circle';
import Colors from '../../utils/Colors';

// hooks
import { useEffect } from 'react';

import * as dat from 'dat.gui';

// add dat gui settings ........................................................................................................
let gui : dat.GUI;

const settings = {
    balls: 2,
    speed: 4,
    reset: false
};
// ---------------------------------------------------------------------------------------------------------------------

export default function Template1() {
    // add dat gui
    useEffect(() => {
        gui = new dat.GUI();
        gui.domElement.style.position = 'absolute';
        gui.domElement.style.top = '16px';
        gui.domElement.style.right = '4px';

        return () => {
            gui.destroy();
        }

    }, []);

    // variables
    const colors = new Colors();
    const circleArray: Circle[] = [];

    useEffect(() => {
        // canvas
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        // console.log("canvas: ", canvas)
        const c = canvas.getContext('2d') as CanvasRenderingContext2D;
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // functions
        function init(num: number, speed: number) {
            circleArray.length = 0;
            for (let i = 0; i < num; i++) {
                const radius = Math.random() * 3 + 30;
                const x = Math.random() * (window.innerWidth - radius * 2) + radius;
                const y = Math.random() * (window.innerHeight - radius * 2) + radius;
                const dx = Math.random() + speed;
                const dy = Math.random() + speed;
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

        // start
        init(settings.balls, settings.speed);
        animate();

        gui.add(settings, 'balls', 1, 6, 1).onChange(value => {
            c.clearRect(0, 0, window.innerWidth, window.innerHeight);
            settings.balls = value;
            init(value, settings.speed);
        });
        gui.add(settings, 'speed', 1, 5, 1).onChange(value => {
            settings.speed = value;
            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].dx = Math.random() + value;
                circleArray[i].dy = Math.random() + value;
            }
        });

        gui.add(settings, 'reset').onChange(value => {
                c.clearRect(0, 0, window.innerWidth, window.innerHeight);
                init(settings.balls, settings.speed);
        });

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
