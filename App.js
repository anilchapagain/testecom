
import Menu from './Components/Menu.components';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Topic from './Pages/Topic';
import Login from './Pages/Login';
import Navigation from './Components/navigation.components';
import Lead from './Pages/Lead';

export default function App() {
  return (
<Router>
<>
<div className='app'>
<Navigation/>
  <div className='container'>

       <Switch>
              <Route exact path="/"><Home/></Route>
              <Route path="/about"><About/></Route>
              <Route path="/topic"><Topic/></Route>
              <Route path="/login"><Login/></Route>
              <Route path="/lead"><Lead/></Route>
            </Switch>
</div>
</div>
</>
</Router>

  
  );
}


