import Circle from '../../modules/Circle';
import Colors from '../../modules/Colors';

// hooks
import { useEffect } from 'react';

import * as dat from 'dat.gui';

export default function Template2() {
    let gui: dat.GUI;

    const settings = {
        balls: 20,
        speed: 5,
    };

    // add gui
    useEffect(() => {
        // add dat gui ........................................................................................................
        gui = new dat.GUI({ name: 'Your settings'});
        gui.domElement.style.position = 'absolute';
        gui.domElement.style.right = '5px';
        gui.domElement.style.top = '20px';

        // ---------------------------------------------------------------------------------------------------------------------
        return () => {
            // cleanup
            // console.log('cleanup dat.gui');
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
                const dx = Math.random() + speed ;
                const dy = Math.random() + speed ;
                const color = colors.getRandomColor();
                circleArray.push(
                    new Circle({ x, y, dx, dy, r: radius, color, c, w: window.innerWidth, h: window.innerHeight }),
                );
            }
        }

        // animation
        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle = 'rgba(255, 255, 255, 0.05)';
            c.fillRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].updateFill();
            }
        }

        // start
        init(settings.balls, settings.speed);
        animate();

        gui.add(settings, 'balls', 1, 80, 1).onChange(value => {
            settings.balls = value;
            init(value, settings.speed);
        });
        gui.add(settings, 'speed', 1, 30, 1).onChange(value => {
            for (let i = 0; i < circleArray.length; i++) {
                settings.speed = value;
                circleArray[i].dx = Math.random() + value ;
                circleArray[i].dy = Math.random() + value ;
            }
        });

        return () => {
            // cleanup
            // console.log('cleanup');
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
