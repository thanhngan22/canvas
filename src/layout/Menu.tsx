import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Menu() {
    function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        // console.log(e.currentTarget);

        // get submenu
        const subMenu = e.currentTarget.parentElement?.querySelector('.templates');
        // console.log(subMenu);

        // if current submenu is open, close it
        const computedStyle = getComputedStyle(subMenu!);

        if (computedStyle.display === 'none') {
            subMenu?.setAttribute('style', 'display: flex;');
        } else {
            subMenu?.setAttribute('style', 'display: none;');
        }
    }


    return (
        <div className="menu__list">
            <div>
                <Link to="/animating" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Animating
                </Link>
                <ul className="templates animating__templates  ">
                    <li className="animating__template">
                        <Link to="/animating/template1" className="template animating__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="animating__template">
                        <Link to="/animating/template2" className="template animating__template">
                            Template 2
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/interacting" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Interacting
                </Link>
                <ul className="templates interacting__templates ">
                    <li className="interacting__template">
                        <Link to="/interacting/template1" className="template interacting__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="interacting__template">
                        <Link to="/interacting/template2" className="template interacting__template">
                            Template 2
                        </Link>
                    </li>
                    <li className="interacting__template">
                        <Link to="/interacting/template3" className="template interacting__template">
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/gravity" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Gravity
                </Link>
                <ul className="templates gravity__templates ">
                    <li className="gravity__template">
                        <Link to="/gravity/template1" className="template gravity__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="gravity__template">
                        <Link to="/gravity/template2" className="template gravity__template">
                            Template 2
                        </Link>
                    </li>
                    <li className="gravity__template">
                        <Link to="/gravity/template3" className="template gravity__template">
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <Link to="/collision-detection" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Collision Detection
                </Link>
                <ul className="templates animating__templates ">
                    <li className="collision-detection__template">
                        <Link to="/collision-detection/template1" className="template collision-detection__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="collision-detection__template">
                        <Link to="/collision-detection/template2" className="template collision-detection__template">
                            Template 2
                        </Link>
                    </li>
                    <li className="collision-detection__template">
                        <Link to="/collision-detection/template3" className="template collision-detection__template">
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/circular-motion" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Circular Motion
                </Link>
                <ul className="templates circular-motion__templates ">
                    <li className="circular-motion__template">
                        <Link to="/circular-motion/template1" className="template circular-motion__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="circular-motion__template">
                        <Link to="/circular-motion/template2" className="template circular-motion__template">
                            Template 2
                        </Link>
                    </li>
                    <li className="circular-motion__template">
                        <Link to="/circular-motion/template3" className="template circular-motion__template">
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <Link to="/sine-waves" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Sine Waves
                </Link>
                <ul className="templates sine-waves__templates ">
                    <li className="sine-waves__template">
                        <Link to="/sine-waves/template1" className="template sine-waves__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="sine-waves__template">
                        <Link to="/sine-waves/template2" className="template sine-waves__template">
                            Template 2
                        </Link>
                    </li>
                    <li className="sine-waves__template">
                        <Link to="/sine-waves/template3" className="template sine-waves__template">
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/fireworks" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Fireworks
                </Link>
                <ul className="templates fireworks__templates ">
                    <li className="fireworks__template">
                        <Link to="/fireworks/template1" className="template fireworks__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="fireworks__template">
                        <Link to="/fireworks/template2" className="template fireworks__template">
                            Template 2
                        </Link>
                    </li>
                    <li className="fireworks__template">
                        <Link to="/fireworks/template3" className="template fireworks__template">
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/galactic-light-trails" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Galactic Light Trails
                </Link>
                <ul className="templates galactic-light-trails__templates ">
                    <li className="galactic-light-trails__template">
                        <Link
                            to="/galactic-light-trails/template1"
                            className="template galactic-light-trails__template"
                        >
                            Template 1
                        </Link>
                    </li>
                    <li className="galactic-light-trails__template">
                        <Link
                            to="/galactic-light-trails/template2"
                            className="template galactic-light-trails__template"
                        >
                            Template 2
                        </Link>
                    </li>
                    <li className="galactic-light-trails__template">
                        <Link
                            to="/galactic-light-trails/template3"
                            className="template galactic-light-trails__template"
                        >
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/snakey-boi" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    One Snakey Boi with Perlin Noise
                </Link>
                <ul className="templates snakey-boi__templates ">
                    <li className="snakey-boi__template">
                        <Link to="/snakey-boi/template1" className="template snakey-boi__template">
                            Template 1
                        </Link>
                    </li>
                    <li className="snakey-boi__template">
                        <Link to="/snakey-boi/template2" className="template snakey-boi__template">
                            Template 2
                        </Link>
                    </li>
                    <li className="snakey-boi__template">
                        <Link to="/snakey-boi/template3" className="template snakey-boi__template">
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/mace-windu-lightsaber" className="menu__item" 
                onClick={e => handleClick(e)}
                >
                    Mace Windu Lightsaber
                </Link>
                <ul className="templates mace-windu-lightsaber__templates ">
                    <li className="mace-windu-lightsaber__template">
                        <Link
                            to="/mace-windu-lightsaber/template1"
                            className="template mace-windu-lightsaber__template"
                        >
                            Template 1
                        </Link>
                    </li>
                    <li className="mace-windu-lightsaber__template">
                        <Link
                            to="/mace-windu-lightsaber/template2"
                            className="template mace-windu-lightsaber__template"
                        >
                            Template 2
                        </Link>
                    </li>
                    <li className="mace-windu-lightsaber__template">
                        <Link
                            to="/mace-windu-lightsaber/template3"
                            className="template mace-windu-lightsaber__template"
                        >
                            Template 3
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
