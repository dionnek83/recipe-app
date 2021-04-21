// import './App.css';
import React from 'react';

import './index.css'


import {UserProvider} from './context/UserContext';
import Router from './components/Router';

function App() {
 

  return (
<UserProvider>

<Router />

 </UserProvider> 


  
  )
}



export default App;
