import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu__list">
            <div className="menu__item">
                <Link to="/animating" className="menu__item">Animating</Link>
            </div>
            <div className="menu__item">
                <Link to="/circular-motion" className="menu__item">Circular Motion</Link>
            </div>
            <div className="menu__item">
                <Link to="/gravity" className="menu__item">Gravity</Link>
            </div>
            <div className="menu__item">
                <Link to="/interacting" className="menu__item">Interacting</Link>
            </div>
            <div className="menu__item">
                <Link to="/collision-detection" className="menu__item">Collision Detection</Link>
            </div>
            <div className="menu__item">
                <Link to="/sine-waves" className="menu__item">Sine Waves</Link>
            </div>
            <div className="menu__item">
                <Link to="/fireworks" className="menu__item">Fireworks</Link>
            </div>
            <div className="menu__item">
                <Link to="/galactic-light-trails" className="menu__item">Galactic Light Trails</Link>
            </div>
            <div className="menu__item">
                <Link to="/snakey-boi" className="menu__item">Snakey Boi</Link>
            </div>
            <div className="menu__item">
                <Link to="/mace-windu-lightsaber" className="menu__item">Mace Windu Lightsaber</Link>
            </div>


        </div>
    )
}