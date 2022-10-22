import React from 'react';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
// import Footer from './Footer';

function App() {
  return (
    <div className="app_wrapper">
       <Header />
       <div className='app_body'>
         <Sidebar/>
         <Feed/>
         <Widget/>
         {/* <Footer/> */}
       </div>
    </div>
  );
}

export default App;
