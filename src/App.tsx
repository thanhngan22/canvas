import React from 'react';

import Menu from './components/Menu';

function App() {
  return (
    <div className="App ">
      <div className="app__container flex border border-slate-500 border-8  ">
      <div className="menu__container w-5/12 min-h-screen bg-red-200 border-r border-red-500">
        <Menu />
      </div>
      <div className="display__container bg-green-200 w-7/12">
        <canvas id="canvas" ></canvas>
      </div>
      </div>
    </div>
  );
}

export default App;
