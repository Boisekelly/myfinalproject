import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './components';
import Me from './components/me';
import Ragu from './components/ragu';
import Molly from './components/molly';
import CatShare from './components/catshare';
import Pretty from './components/pretty';
import Alli from './components/alli';
import Daisy from './components/daisy';
import Create from './components/create';
import './App.css';;

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/ragu' element={<Ragu/>} />
		<Route path='/pretty' element={<Pretty/>} />
		<Route path='/molly' element={<Molly/>} />
    <Route path='/me' element={<Me/>} />
    <Route path='/daisy' element={<Daisy/>} />
    <Route path='/alli' element={<Alli/>} />
		<Route path='/catshare' element={<CatShare/>} />
	</Routes>
	</Router>
);
return (
  <div className="crud">
    <h1 className="crudDesign">
      Funny Cat Stories
    </h1>
  </div>
);
}

export default App;
