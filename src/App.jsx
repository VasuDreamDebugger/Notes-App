import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Deleted from './pages/Deleted';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const App = () => {
  
   
  return (
    <>
    <Header/>
    <div className='flex'>
      <Sidebar/>

     <div className='bg-white p-8 w-full min-h-screen'>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/bin" element={<Deleted />} />
    </Routes>
     </div>
    </div>
   </>
  )
}

export default App;