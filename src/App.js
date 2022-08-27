import logo from './logo.svg';
import './App.css';

import {Routes , Route} from 'react-router-dom'
import MainLayout from './layout/main';

import Home from './pages/home/Home'
import About from './pages/About/About';
import Conatct from './pages/contact/Conatct';
import DashBoard from './pages/dashbaord/DashBoard';



function App() {
  return (
    <div className="App">
      <Routes>
        {/* home and about will have header i.e mainLayout so they are embeded as children to them  */}
        <Route  path ='/'element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}> </Route>
        {/* here mainlaout will be shared  */}
        <Route path ='dashboard' element ={<DashBoard/>}/>

        </Route>
          {/* mainlayout That is Header here will not be inclued for contact page so this route is outside of the mainLayout */}
        <Route path='contact' element ={<Conatct/>}/>
        {/* here mainlaout will not be be shared  means show */}
        {/* <Route path ='dashboard' element ={<DashBoard/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
