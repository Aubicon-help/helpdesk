import React from 'react';
import './App.css';
import Logo from './Assests/img/aubicon.jpg'
function App() {
  return (
    <div className="col-sm-12 text-center">
      <div className="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 mx-auto text-center">
            <img className='logo' src={Logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
