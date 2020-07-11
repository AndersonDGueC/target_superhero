import React from 'react';
import SuperHero from './components/SuperHero'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CharHero from './components/CharHero';

class App extends React.Component {
  render(){
  return (
    <div>
       <BrowserRouter>
       <Switch>
         <Route exact path="/" render={()=><SuperHero/>}/>
         <Route exact path="/:id" render={()=><CharHero/>}/>
       </Switch>
       </BrowserRouter>
      </div>
     
  );
          }
}

export default App;
