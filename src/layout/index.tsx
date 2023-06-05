import { Outlet } from 'react-router-dom';
import Menu from './Menu';

function Layout() {
    return (
        <div className="app__container  flex   ">
            <div className="menu__container w-3/12  border-r border-blue-400 border-r-8">
                <Menu />
            </div>
            <div className="display__container  w-9/12 p-5">
                <Outlet />

            </div>
        </div>
    );
}

export default Layout;
