import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

function App() {
    const router = createBrowserRouter(routes);
    return (
        <div className="App ">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
